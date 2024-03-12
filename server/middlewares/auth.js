let jwt = require("jsonwebtoken");
let secret = "movie_app";

let createToken = (data) => {
  return jwt.sign({ data }, secret);
};

let authenticate = (req, res, next) => {
  let token = req.cookies["token"];
  console.log(token);

  if (!token) {
    res.status(400).json({ message: "you are not login" });
  }

  let user = jwt.verify(token, secret);

  console.log(user.data);

  req.user = user;
  next();
};

module.exports = {createToken, authenticate}
