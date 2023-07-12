const mongoose = require("mongoose");

const connectToDB = async () => {
   mongoose
      .connect(process.env.MONGOURI)
      .then((conn) => {
         console.log(`Connected to database: ${conn.connection.host}`);
      })
      .catch((err) => {
         console.log(err.massage);
         process.exit(1);
      });
};

module.exports = connectToDB;
