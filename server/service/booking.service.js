const { movieSchema, userSchema, bookingSchema } = require("../models");
const booking = require("../models/booking.model");

// find existing movie
const  existingMovie = (movie) => {
    return movieSchema.findById(movie);
}

// find existing user
const existingUser = (user) => {
    return userSchema.findById(user);
}

//  create booking
const addBooking = (body) => {
    return bookingSchema.create(body)
}

// get booking
const getBookingList = () => {
    return bookingSchema.find()
}

// get booking by id
const getBookingbyId = (id) => {
    return bookingSchema.findById(id)
}

//  delete booking
const deleteBooking = (id) => {
    return bookingSchema.findByIdAndDelete(id).populate("user movie")
}

module.exports = {
  existingMovie,
  existingUser,
  addBooking,
  getBookingList,
  getBookingbyId,
  deleteBooking,
};
