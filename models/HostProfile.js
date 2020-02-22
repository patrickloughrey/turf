const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "host"
  },
  fields: {
    type: [String],
    required: true
  },
  website: {
    type: String
  },
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

module.exports = HostProfile = mongoose.model("hostProfile", ProfileSchema);
