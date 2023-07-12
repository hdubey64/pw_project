const User = require("../models/userModel.js");

exports.home = (req, res) => {
   res.send("Hello, world!");
};

exports.createuser = async (req, res) => {
   //extract information
   try {
      const { name, email } = req.body;
      if (!name || !email) {
         throw new Error("Name and email cannot be empty");
      }

      const userExists = await User.findOne({ email });

      if (userExists) {
         throw new Error("User already exists");
      }

      const user = User.create({
         name,
         email,
      });

      res.status(201).json({
         success: true,
         message: "User created successfully",
         user,
      });
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success: false,
         message: error.message,
      });
   }
};

exports.getUsers = async (req, res) => {
   try {
      const user = await User.find({});
      user
         ? res.status(200).json({ success: true, message: "User found", user })
         : res.status(409).json({ success: false, message: "User not found" });
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success: false,
         message: error.message,
      });
   }
};

exports.deleteUser = async (req, res) => {
   try {
      const userID = req.params.id;
      const user = await User.findOneAndDelete(userID);
      user
         ? res
              .status(200)
              .json({ success: true, message: "User deleted", user })
         : res.status(409).json({ success: false, message: "user not found" });
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success: false,
         message: error.message,
      });
   }
};

exports.editUser = async (req, res) => {
   try {
      const userID = req.params.id;
      const user = await User.findByIdAndUpdate(userID);

      user.modifiedCount
         ? res
              .status(200)
              .json({ success: true, message: "User updated", user })
         : res.status(409).json({ massage: "Failed to update user", user });
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success: false,
         message: error.message,
      });
   }
};
