const { movieSchema } = require("../models")

//  ========== addMovie =============
const addMovie = (body) => {
    return movieSchema.create(body)
}

//  =========== find movie by title ===========
const findMovieByTitle = (title) => {
    movieSchema.findOne({title})
}

//  =========== get movie =============
const getMovie = () => {
    return movieSchema.find()
}

// ============= get movie by id =========
const findMovieById = (id) =>{
    return movieSchema.findById(id)
}

module.exports = { addMovie, findMovieByTitle, getMovie, findMovieById };