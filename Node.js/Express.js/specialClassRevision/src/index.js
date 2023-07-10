import app from "./app.js";
import mongoose from "mongoose";

const port = 3000;

(async () => {
   try {
      await mongoose.connect(
         "mongodb+srv://hdubey64pw:Test123@cluster0.9anltyr.mongodb.net/todoapp"
      );
      console.log("DB Conected");

      app.on("error", (err) => {
         console.log("ERROR: ", err);
         throw err;
      });

      const onListing = () => {
         console.log(`LIsting on port: ${port}`);
      };

      app.listen(port, onListing);
   } catch (err) {
      console.log("error", err);
      throw err;
   }
})();

// app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`);
// });
