import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      maxLength: [50, "Name should be less than 50 charcter"],
      required: [true, "Name field cann't be blank"],
      unique: true,
   },
   email: {
      type: String,
      required: [true, "Email field cann't be blank"],
      unique: true,
   },
   age: {
      type: Number,
      required: [true, "Age field cann't be blank"],
      min: [18, "Age conn't be less than 18"],
      max: [18, "Age conn't be more than 62"],
   },
});

export default mongoose.model("User", userSchema);
