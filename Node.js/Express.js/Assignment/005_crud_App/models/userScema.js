const mongoose = require("mongoose");

/**
 * Define the user schema using Mongoose.
 * This schema represents the structure and validation rules for the 'users' collection in the MongoDB database.
 * Modify the schema properties and options as per your application's requirements.
 */

const userSchema = new mongoose.Schema(
   // Define the properties of the user schema

   {
      name: {
         typeof: "string",
         minLength: [5, "Name should be more than 5 characters"],
         maxLength: [5, "Name should be more than 5 character"],
         required: [true, "Name is required"],
         trim: true,
      },
      email: {
         typeof: "string",
         required: [true, "Email is required"],
         unique: [true, "Email must be  unique"],
         lowercase: true,
      },
      passWord: {
         typeof: "string",
         required: [true, "Password is required"],
         select: false,
      },
   },
   {
      timestamps: true,
   }
);

// Define the user model using Mongoose
// The model will be named "User" and will use the provided userSchema
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
