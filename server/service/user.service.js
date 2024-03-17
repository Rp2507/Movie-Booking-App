const { userSchema, bookingSchema } = require("../models")
const booking = require("../models/booking.model")

// get user
const getUser = () =>{
    return userSchema.find()
}

// find user by email
const findUserByEmail = (email) => {
    return userSchema.findOne({email})
}

// add user
const createUser = (reqBody) => {
    return userSchema.create(reqBody)
}

// find user by id
const findUserById = (id) => {
    return userSchema.findById(id)
}

// delete user
const deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id )
}

// update user
const updateUser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, {$set: body})
}

// find booking
const findBooking = (id) => {
return bookingSchema.find({ user: id}).populate("movie").populate("user")
}

module.exports = {
  getUser,
  findUserByEmail,
  createUser,
  findUserById,
  deleteUser,
  updateUser,
  findBooking,
};