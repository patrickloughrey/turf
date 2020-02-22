const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const Host = require("../../../models/Host");

// @route           POST api/hosts
// @description     Register host
// @access          Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check(
      "password",
      "Please enter a password with a minimum of 6 characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if host exists
      let host = await Host.findOne({ email });

      if (host) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Host already exists" }] });
      }

      // Get hosts gravatar
      const avatar = gravatar.url(email, {
        s: "200", // size
        r: "PG", // Don't let user upload graphic image
        d: "mm" // Default user icon image
      });

      host = new Host({
        name,
        email,
        avatar,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      host.password = await bcrypt.hash(password, salt);

      // Save user to DB
      await host.save();

      const payload = {
        host: {
          id: host.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
