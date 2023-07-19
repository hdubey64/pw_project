require("dotenv").config();

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGODB_URI;

const dbConnection = async () => {
   mongoose
      .connect(MONGO_URL)
      .then((conn) => {
         console.log(`Connecting to Database: ${conn.connection.host}`);
      })
      .catch((err) => {
         console.log("DATABASE", err.message);
         process.exit(1);
      });
};

module.exports = dbConnection;
