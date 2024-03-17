const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validation");
const { adminController } = require("../controller");
const route = express.Router();

route.post(
  "/signup",
  validate(adminValidation.admin),
  adminController.createAdmin
);
route.post("/login", adminController.login);
route.get("/getAdminList", adminController.getAdminList);
route.get("/getAdmin/:id", adminController.getAdminById)

module.exports = route;
