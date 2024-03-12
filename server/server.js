require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookie-parser
app.use(cookieParser())

// routes
app.use('/v1', routes)

// db connect
dbConnect()

// create server
http.createServer(
  app.listen(process.env.PORT, () => {
    console.log("server started");
  })
);
