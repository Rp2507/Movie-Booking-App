const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  actors:[{
    type: String
  }],
  realeaseDate: {
    type: Date,
  },
  posterUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
  booking: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Booking"
    },
  ],
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "Admin"
  },
});

const movie = mongoose.model('movieSchema', movieSchema)
module.exports = movie
