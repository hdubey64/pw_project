require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectToDB = require("./config/db.js");

//Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//init connection to db
connectToDB();

const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;
