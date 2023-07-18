const mongoose = require("mongoose");

// Define the MongoDB connection URL
const MongoDB_URL =
   process.env.MongoDB_URI || "mongodb://localhost:27017/pwCrudAsssingment";

// Function to connect to the MongoDB database
const connectToDB = () => {
   // Connect to the specified MongoDB URL
   mongoose
      .connect(MongoDB_URL)
      .then((conn) => {
         // Log a success message with the host of the connected database
         console.log(`Connected on DB: ${conn.connection.host}`);
      })
      .catch((err) => {
         err.message;
      });
};

module.exports = connectToDB;
