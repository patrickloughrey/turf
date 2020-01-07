const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  team: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  members: {
    type: [String],
    required: true
  },
  league: {
    type: String,
    required: true
  },
  schedule: {
    type: [String]
  },
  insurance: [
    {
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
        required: true
      },
      description: {
        type: String
        // required: true
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
