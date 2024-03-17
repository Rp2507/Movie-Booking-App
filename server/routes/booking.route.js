const express = require('express');
const { bookingController } = require('../controller');
const route = express.Router()

route.get("/getBookingList", bookingController.getBookingList)
route.get("/getBookingList/:id", bookingController.getBookingbyId);
route.post("/addBooking", bookingController.addBooking);
route.delete("/deleteBooking/:id", bookingController.deleteBooking)

module.exports = route