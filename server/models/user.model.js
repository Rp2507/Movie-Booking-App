const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    profile:{
        type: String
    },
    booking: [{
        type: mongoose.Types.ObjectId,
        ref: "Booking"
    }]
})

const user = mongoose.model("userSchema", userSchema)
module.exports = user