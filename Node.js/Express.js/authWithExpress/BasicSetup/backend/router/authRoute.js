const express = require("express");
const { signup } = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/signup", signup);

module.exports = authRouter;
