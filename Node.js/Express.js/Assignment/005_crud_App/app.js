// Load environment variables from .env file
require("dotenv").config();

// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Enable parsing of JSON data in the request body
app.use(express.json());

module.exports = app;
