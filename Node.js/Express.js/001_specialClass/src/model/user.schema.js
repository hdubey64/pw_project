import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "Name should be less then 50 characters"],
   },
   email: {
      type: String,
      unique: true,
   },
   username: {
      type: String,
      unique: true,
   },
   passeord: String,
   age: Number,
});

export default mongoose.model("User", userSchema);
