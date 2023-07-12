const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: "string",
      required: [true, "Name is required"],
      trim: true,
      maxLength: [25, "Name must be less than 25 characters"],
   },
   email: {
      type: "string",
      rewuild: [true, "Email is required"],
      unique: true,
   },
});

module.exports = mongoose.model("User", userSchema);
