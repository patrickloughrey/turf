const express = require("express");
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Field = require("../../../models/Field");
const Host = require("../../../models/Host");

// @route           POST api/field
// @description     Host creates a field
// @access          Private
router.post(
  "/",
  [
    auth,
    [
      check("location", "Complete address is required")
        .not()
        .isEmpty(),
      check("price", "Price is required")
        .not()
        .isEmpty(),
      check("photos", "At least one photo is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const host = await Host.findById(req.host.id).select("-password");
      const newField = {
        location: req.body.location,
        price: req.body.price,
        photos: req.body.photos,
        host: req.host.id
      };

      const field = await newField.save();
      res.json(field);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
