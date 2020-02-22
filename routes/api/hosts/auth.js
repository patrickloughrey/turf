const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");

const Host = require("../../../models/Host");

// @route           GET api/hostAuth
// @description     Register host
// @access          Public
router.get("/", auth, async (req, res) => {
  try {
    const host = await Host.findById(req.host.id).select("-password");
    res.json(host);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/hostAuth
// @description     Authenticate host & get JWT
// @access          Public
router.post(
  "/",
  [
    check("email", "Please include a valid email address").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let host = await Host.findOne({ email });

      if (!host) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, host.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

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
