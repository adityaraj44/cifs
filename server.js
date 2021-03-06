const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const morgan = require("morgan");

// dotenv
dotenv.config({
  path: "./config/config.env",
});

// config db
connectDB();

// creating app
const app = express();

// morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(`${__dirname}/public`));

// ejs view engine
app.use(expressLayouts);
app.set("layout", "layouts/layout");
app.set("view engine", "ejs");

// routes
app.use("/", require("./routes/index"));
app.use("/contactus", require("./routes/contact"));
app.use("/aboutus", require("./routes/about"));
app.use("/clients", require("./routes/clients"));
app.use("/certification", require("./routes/certification"));
app.use("/awards", require("./routes/awards"));
app.use("/current", require("./routes/current"));
app.use("/services", require("./routes/services"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.green.bold
  );
});
