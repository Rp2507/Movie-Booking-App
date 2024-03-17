// const jwt = require("jsonwebtoken");
const { movieService } = require("../service");
// require("dotenv").config();

//  ========== add movie ============
// const addMovie = async (req, res) => {
//   try {
//     const extractedToken = req.headers.authorization.split(" ")[1];
//     if (!extractedToken && extractedToken.trim() === "") {
//       return res.status(404).json({ message: "TOken Not FOund" });
//     }
//     //   console.log(extractedToken, "barrier");

//     let adminId;
//     // verify token
//     jwt.verify(extractedToken, process.env.SECTER, (err, decrypted) => {
//       if (err) {
//         res.status(400).json({ message: err.message });
//       } else {
//         adminId = decrypted.id;
//         return;
//       }
//     });

//     const { title, description, realeaseDate, posterUrl, featured, actors } =
//       req.body;

//     // if (!reqBody) {
//     //   throw new Error("data not get");
//     // }

//     let body = {
//       title,
//       description,
//       realeaseDate: new Date(`${realeaseDate}`),
//       posterUrl,
//       featured,
//       actors,
//       admin: adminId,
//     };

//     const movie = await movieService.addMovie(body);

//     if (!movie) {
//       throw new Error("movie not added");
//     }

//     res.status(201).json({
//       success: true,
//       message: "movie added successfully",
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// =========== add movie ============
const addMovie = async (req, res) => {
  try {
    let body = req.body;

    if (!body) {
      throw new Error("data not get");
    }
    let movieExist = await movieService.findMovieByTitle(req.body.title);

    if (movieExist) {
      throw new Error("movie already exist");
    }

    let movie = await movieService.addMovie(body);

    if (!movie) {
      throw new Error("movie not added");
    }

    res.status(201).json({
      success: true,
      message: "movie added successfully",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "something went wrong!",
    });
  }
};

//  ========== get movie ==========
const getMovie = async (req, res) => {
    try {
        let movie = await movieService.getMovie()

        if(!movie){
            throw new Error('data not get')
        }

        res.status(200).json({
            success: true,
            message: "movie get successfully",
            movie
        })

    } catch (error) {
         res.status(400).json({
           success: false,
           message: error?.message || "something went wrong!",
         });
    }
}

// ============ get movie by id ===========
const getMovieById = async (req, res) => {
    try {
        
        let id = req.params.id;
        if(!id){
            throw new Error('movie is not found')
        }

        let movie = await movieService.findMovieById(id)

        if(!movie){
            throw new Error('Invalid Movie ID')
        }

        res.status(200).json({
          success: true,
          message: "movie get successfully",
          movie,
        });

    } catch (error) {
         res.status(400).json({
           success: false,
           message: error?.message || "something went wrong!",
         });
    }
}

module.exports = { addMovie, getMovie, getMovieById };
