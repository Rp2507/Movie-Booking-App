const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  realeaseDate: {
    type: Date,
  },
  posterUrl: {
    type: String,
  },
  featured: {
    type: String,
  },
  booking: [
    {
      type: String,
    },
  ],
  admin: {
    type: String,
  },
});

const movie = mongoose.model('movieSchema', movieSchema)
module.exports = movie
