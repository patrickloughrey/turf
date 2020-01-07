const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hosts"
  },
  location: {
    street: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  },
  availability: {
    type: [String],
    required: true
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
        type: String,
        required: true
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
  miscellaneous: {
    lights: {
      type: Boolean,
      required: true
    },
    bathrooms: {
      type: Boolean,
      required: true
    },
    grass: {
      type: String,
      required: true
    },
    soccer_nets: {
      type: Boolean,
      required: true
    },
    field_goal: {
      type: Boolean,
      required: true
    }
  },
  summary: {
    type: String
  },
  reviews: {
    type: [String]
  },
  price: {
    type: Number,
    required: true
  },
  security_deposit: {
    type: Number
  },
  photos: {
    type: [String],
    required: true
  },
  profile_photo: {
    type: String,
    required: true
  },
  contact: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mailing_address: {
      type: String,
      required: true
    }
  }
});

module.exports = Field = mongoose.model("field", FieldSchema);
