const mongoose = require("mongoose");

const MongoDB_URL =
   process.env.MongoDB_URI || "mongodb://localhost:27017/pwCrudAsssingment";

const connectToDB = () => {
   mongoose
      .connect(MongoDB_URL)
      .then((conn) => {
         console.log(`Connected on DB: ${conn.connection.host}`);
      })
      .catch((err) => {
         err.message;
      });
};

module.exports = connectToDB;
