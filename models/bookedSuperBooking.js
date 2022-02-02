const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookedSuperBookingSchema = new Schema(
  {
    superBooking: {
      type: Schema.Types.ObjectId,
      ref: "SuperBooking",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookedSuperBooking", bookedSuperBookingSchema);
