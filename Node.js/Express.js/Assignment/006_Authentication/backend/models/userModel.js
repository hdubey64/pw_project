const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: "string",
      required: [true, "Name is required"],
      trim: true,
      maxLength: [25, "Name must be less than 25 characters"],
   },
   userName: {
      type: "string",
      required: [true, "Name is required"],
      trim: true,
      maxLength: [25, "Name must be less than 25 characters"],
      unique: [true, "Already existing"],
   },
   email: {
      type: "string",
      rewuild: [true, "Email is required"],
      unique: [true, "Already existing"],
   },
   bio: {
      type: "string",
      trim: true,
      maxLength: [250, "Bio must be less than 250 characters"],
   },
   password: {
      type: "string",
      select: false,
   },
});

module.exports = mongoose.model("User", userSchema);
