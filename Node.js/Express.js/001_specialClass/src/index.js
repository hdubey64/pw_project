import app from "./app.js";
import mongoose from "mongoose";
// const app = express();

const port = 3000;

// Databse connection - mongodb
// Database connection may fail
// Databse is always in another continect

// mongoose.connect("mongodb://127.0.0.1:27017/test");

(async () => {
   try {
      //dbContection
      await mongoose.connect("dbstring");
      console.log("DB Connection succes");

      app.on("error", (err) => {
         console.log("ERROR: ", err);
         throw err;
      });

      const onListing = () => {
         console.log(`LIsting on port: ${port}`);
      };

      app.listen(port, onListing);
   } catch (error) {
      console.log("Error:", err);
      throw err;
   }
})();

// app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`);
// });
