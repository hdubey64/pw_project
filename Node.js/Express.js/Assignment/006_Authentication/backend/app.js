require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./config/db.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

dbConnection();

module.exports = app;
