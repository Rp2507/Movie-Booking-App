const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const movieRoute = require("./movie.route");
const { authenticate } = require("../middlewares/auth");
const bookingRoute = require('./booking.route')

routes.use("/user", authenticate, userRoute);
routes.use(
  "/admin",
  authenticate,
  adminRoute
);
routes.use("/movie",authenticate, movieRoute);
routes.use("/booking",bookingRoute)

module.exports = routes;
