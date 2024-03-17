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
    addedMovies:[{
        type: mongoose.Types.ObjectId,
        ref: "Movie",
    }]
})

const admin = mongoose.model('adminSchema', adminSchema)
module.exports = admin