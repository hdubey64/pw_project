// Load environment variables from .env file
require("dotenv").config();

// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

const router = require("./router/routes");

// const connectToDB = require("./config/databaseConfig");

// connectToDB();

// Enable parsing of JSON data in the request body
app.use(express.json());
app.use("/", router);

module.exports = app;
