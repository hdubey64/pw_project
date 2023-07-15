const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
   {
      name: {
         type: "string",
         required: [true, "User name is required"],
         minLength: [5, "Name must be at least 5 characters"],
         maxLength: [50, "Name must be less then 5 characters"],
         trim: true,
      },
      email: {
         type: "string",
         required: [true, "User emai is required"],
         unique: [true, "Email must be unique"],
         lowercase: true,
      },
      password: {
         type: "string",
         select: false,
      },
      forgotpasswordToken: {
         type: "string",
      },
      forgotpasswordExpiryDate: {
         type: Date,
      },
   },
   {
      timestamps: true,
   }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
