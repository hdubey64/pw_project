require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");

// routes

const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/user.routes");

mongoose
   .connect(config.dbURL)
   .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
   .catch((error) => {
      console.error("FAILED TO CONNECT DB");
      throw error;
   });

app.use(express.json());

const statusFunction = (req, res) => {
   return res.status(200).json({
      status: "OK",
      mongoose: `Test app listening on ${config.host} port ${config.port}`,
   });
};

app.get("/status", statusFunction);

app.use("/user", userRoutes);
app.use("/profile", profileRoutes);

app.listen(config.port, () => {
   console.log(`Test app listening on ${config.host} port ${config.port}`);
});
