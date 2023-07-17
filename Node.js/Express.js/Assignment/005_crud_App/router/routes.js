const express = require("express");
const { userRegistration } = require("../controller/userController");

const router = express.Router();
router.post("/ragister", userRegistration);

module.exports = router;
