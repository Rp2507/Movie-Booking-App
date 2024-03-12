const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const { authenticate } = require("../middlewares/auth");

routes.use("/user",authenticate ,userRoute);

module.exports = routes;
