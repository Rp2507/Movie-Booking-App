const express = require('express')
const { userController } = require('../controller')
const { upload } = require('../middlewares/multer')
const validate = require('../middlewares/validate')
const { userValidation } = require('../validation')
const route = express.Router()

route.get('/getUser', userController.getUser)
route.post('/add',upload.single('profile'),
validate(userValidation.user), userController.createUser)
route.delete('/delete/:id', userController.deleteUser)
route.put(
  "/update/:id",
  upload.single("profile"),
  validate(userValidation.user),
  userController.updateUser
);
route.post('/login', userController.login)

module.exports = route