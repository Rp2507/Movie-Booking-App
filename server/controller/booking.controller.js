const { bookingService } = require("../service");

//  create new booking
const addBooking = async (req, res) => {
  try {
    let { movie, date, seatNumber, user } = req.body;

    let existingMovie = await bookingService.existingMovie(movie);

    if (!existingMovie) {
      return res.status(404).json({ message: "Movie Not Found With Given ID" });
    }

    let existingUser = await bookingService.existingUser(user);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found with given ID " });
    }

    let body = new Bookings({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    let booking = await bookingService.addBooking(body);

    if (!booking) {
      throw new Error("Unable to create a booking");
    }
    res.status(201).json({
      success: true,
      message: "booking create successfully",
      booking,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

// ============ get booking list =============
const getBookingList = async (req, res) => {
  try {
    let booking = await bookingService.getBookingList();

    if (!booking) {
      throw new Error("bookingList not get");
    }

    res.status(200).json({
      success: true,
      message: "booking list get successfully",
      booking,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

//  =========== get booking by id ===========
const getBookingbyId = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) {
      throw new Error("id not get");
    }

    let booking = await bookingService.getBookingbyId(id);

    if (!booking) {
      throw new Error("bookingList not get");
    }

    res.status(200).json({
      success: true,
      message: "booking list get successfully",
      booking,
    });

  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

// =========== delete booking =============
const deleteBooking = async (req, res) => {
    try {
        let id = req.params.id;

        if (!id) {
          throw new Error("id not get");
        }

        let booking = await bookingService.deleteBooking(id)

        if (!booking) {
          throw new Error(" this booking not get");
        }

        res.status(200).json({
          success: true,
          message: "booking delete successfully",
          booking,
        });


    } catch (error) {
        res.status(error?.status || 400).json({
          success: false,
          message: error?.message || "Somthing went wrong!",
        });
    }
}

module.exports = { addBooking, getBookingList, deleteBooking, getBookingbyId };
