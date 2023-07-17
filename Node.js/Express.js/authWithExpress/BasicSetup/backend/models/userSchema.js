const mongoose = require("mongoose");
const { Schema } = mongoose;
const JWT = require("jsonwebtoken");

const bcrypt = require("bcrypt");

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

//Password Encryption code
userSchema.pre("save", async function (next) {
   // If password is not modified go to next()
   if (!this.isModified("password")) {
      return next;
   }
   //If password is modified using bycrypt
   this.password = await bcrypt.hash(this.password, 10);
   return next();
});

userSchema.methods = {
   jwtToken() {
      return JWT.sign(
         {
            id: this._id,
            email: this.email,
         },
         process.env.SECRET,
         { expiresIn: "24h" }
      );
   },
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
