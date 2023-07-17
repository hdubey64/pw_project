const express = require("express");
const { userRegistration, userLogin } = require("../controller/userController");

const router = express.Router();
router.post("/ragister", userRegistration);
router.post("/login", userLogin);

module.exports = router;
