const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    addMovie:[{
        type: String
    }]
})

const admin = mongoose.model('adminSchema', adminSchema)
module.exports = admin