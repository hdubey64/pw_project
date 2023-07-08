const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: true, collection: "User" }
);

module.exports = mongoose.model("User", UserModel);
