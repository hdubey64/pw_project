const express = require("express");
const app = express();
const dbConnection = require("./config/db.js");
const cors = require("cors");
const router = require("./router/routes.js");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
   cors({
      origin: "http://localhost:5501" || "http://127.0.0.1:5501",
      credentials: true,
   })
);

dbConnection();

app.use("/api/instagram", router);

module.exports = app;
