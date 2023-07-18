const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * Define the user schema using Mongoose.
 * This schema represents the structure and validation rules for the 'users' collection in the MongoDB database.
 * Modify the schema properties and options as per your application's requirements.
 */

const userSchema = new mongoose.Schema(
   // Define the properties of the user schema

   {
      name: {
         type: "string",
         minLength: [5, "Name must be at least 5 characters"],
         maxLength: [50, "Name should be more than 50 character"],
         required: [true, "Name is required"],
         trim: true,
      },
      email: {
         type: "string",
         required: [true, "Email is required"],
         unique: [true, "Email must be  unique"],
         lowercase: true,
      },
      password: {
         type: "string",
         required: [true, "Password is required"],
         select: false,
      },
   },
   {
      timestamps: true,
   }
);

//For Password encryption
userSchema.pre("save", async function (next) {
   try {
      //if password is not modified goto next
      if (!this.isModified("password")) {
         return next();
      }
      //if password is modified encrypt and goto next
      this.password = bcrypt.hash(this.password, 10);
      return next();
   } catch (e) {
      console.log(e);
      return e;
   }
});

// Define the user model using Mongoose
// The model will be named "User" and will use the provided userSchema
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
