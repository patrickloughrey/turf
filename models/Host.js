const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  contact: {
    phone: {
      type: String
      // required: true
    },
    email: {
      type: String
      // required: true
    },
    mailing_address: {
      type: String
      // required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Host = mongoose.model("host", hostSchema);
