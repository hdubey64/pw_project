const express = require("express");
const { signup, signIn, getUser } = require("../controllers/authControllers");
const jwtAuth = require("../middleware/jwtAuth");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signIn);
authRouter.get("/user", jwtAuth, getUser);

module.exports = authRouter;
