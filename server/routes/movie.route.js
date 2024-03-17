const express = require('express')
const { movieController } = require('../controller')
const validate = require('../middlewares/validate')
const { movieValidation } = require('../validation')
const route = express.Router()

route.post('/add',validate(movieValidation.movie), movieController.addMovie)
route.get('/get', movieController.getMovie)
route.get('/get/:id', movieController.getMovieById)

module.exports = route