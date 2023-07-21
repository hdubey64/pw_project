const express = require("express");
const { signup, logIn, homePage } = require("../controllers/userController");
const signUpDataValidat = require("../middleware/signUpDataValidat");
const loginValidation = require("../middleware/loginValidation");

const authRouter = express.Router();

authRouter.post("/signup", signUpDataValidat, signup);
authRouter.post("/login", logIn);
authRouter.get("/", loginValidation, homePage);

module.exports = authRouter;
