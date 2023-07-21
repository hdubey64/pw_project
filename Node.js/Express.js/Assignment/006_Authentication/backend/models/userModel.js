const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = new mongoose.Schema({
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

userModel.pre("save", async function (next) {
   // If password is not modified go to next()
   if (!this.isModified("password")) {
      return next;
   }
   //If password is modified using bycrypt
   this.password = await bcrypt.hash(this.password, 10);
   return next();
});

userModel.methods = {
   jwtToken() {
      return JWT.sign(
         {
            id: this._id,
            userName: this.userName,
         },
         process.env.SECRET,
         { expiresIn: "24h" }
      );
   },
};

module.exports = mongoose.model("User", userModel);
