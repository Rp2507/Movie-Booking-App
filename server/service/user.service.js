const { userSchema } = require("../models")

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

module.exports = {
  getUser,
  findUserByEmail,
  createUser,
  findUserById,
  deleteUser,
  updateUser,
};