const express = require("express");
const { userRegistration, userLogin } = require("../controller/userController");

// Create an instance of the Express router
const router = express.Router();

// Define the routes and their handlers
// POST /register - Route for user registration
router.post("/ragister", userRegistration);

// POST /login - Route for user login
router.post("/login", userLogin);

// Export the router for use in other files
module.exports = router;
