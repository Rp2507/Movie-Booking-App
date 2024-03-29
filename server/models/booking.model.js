const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "Movie",
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  seatNumber: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const booking = mongoose.model("bookingSchema", bookingSchema);
module.exports = booking;
