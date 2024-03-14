const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const { authenticate } = require("../middlewares/auth");

routes.use(
  "/user",
   authenticate,
  userRoute
);
routes.use("/admin",authenticate, adminRoute);

module.exports = routes;
