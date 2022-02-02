const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const superBookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    room: {
      type: String,
      required: true,
    },

    persons: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },

    dateofSentRequest: {
      type: String,
      required: true,
    },
    statusOfSuperBooking: {
      type: String,
      required: true,
    },
  }
  // { timestamps: true }
);

module.exports = mongoose.model("SuperBooking", superBookingSchema);
