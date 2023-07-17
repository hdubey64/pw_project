// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router/routes");
const connectToDB = require("./config/databaseConfig");

connectToDB();

// Enable parsing of JSON data in the request body
app.use(express.json());
app.use("/", router);

module.exports = app;
