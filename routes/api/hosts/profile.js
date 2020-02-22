const express = require("express");
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// @route           GET api/profile/me
// @description     Get current user's profile
// @access          Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]); // Corresponds to ObjectId in Profile schema

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/profile
// @description     Create or update user's profile
// @access          Private
router.post(
  "/",
  [
    auth,
    [
      check("team", "Team is required")
        .not()
        .isEmpty(),
      check("location", "Location is required")
        .not()
        .isEmpty(),
      check("members", "Team members are required")
        .not()
        .isEmpty(),
      check("league", "League is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      team,
      website,
      location,
      members,
      league,
      schedule,
      insurance,
      youtube,
      facebook,
      instagram,
      twitter
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (team) profileFields.team = team;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (league) profileFields.league = league;
    if (schedule) profileFields.schedule = schedule;
    if (members) {
      profileFields.members = members.split(",").map(item => item.trim());
    }
    // if (insurance) {
    //   profileFields.insurance = insurance.split(",").map(item => item.trim());
    // }

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      // Update profile
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // Create profile
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route           GET api/profiles
// @description     Get all profiles
// @access          Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);

    res.json(profiles);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route           GET api/profile/user/:user_id
// @description     Get profile by User ID
// @access          Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route           DELETE api/profile
// @description     Delete user & profile
// @access          Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route           PUT api/profile/insurance
// @description     Add insurance to profile
// @access          Private
router.put(
  "/insurance",
  [
    auth,
    [
      check("company", "Company is required")
        .not()
        .isEmpty(),
      check("location", "Location is required")
        .not()
        .isEmpty(),
      check("from", "From is required")
        .not()
        .isEmpty(),
      check("to", "To is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { company, location, from, to, description } = req.body;

    const insurance = {
      company,
      location,
      to,
      from,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.insurance.unshift(insurance);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route           DELETE api/profile/insurance/:insurance_id
// @description     Delete insurance within profile
// @access          Private
router.delete("/insurance/:insurance_id", auth, async (req, res) => {
  try {
    // Find Profile
    const profile = await Profile.findOne({ user: req.user.id });

    // Get insurance to be removed
    const removeIndex = profile.insurance
      .map(item => item.id)
      .indexOf(req.params.insurance_id);

    // Remove by splicing from insurance array
    profile.insurance.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
