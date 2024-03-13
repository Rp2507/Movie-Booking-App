const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
  },
  date: {
    type: Date,
  },
  seatNumber: {
    type: Number,
  },
  user: {
    type: String,
  },
});

const booking = mongoose.model("bookingSchema", bookingSchema);
module.exports = booking;
