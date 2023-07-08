const UserModel = require("../models/user.model");

const getUsers = async (req, res) => {
   const users = await UserModel.find();
   return res.status(200).json({ users });
};

const createUser = async (req, res) => {
   const { username, password } = req.body;

   const foundUser = await UserModel.findOne({ username });

   if (foundUser)
      return res
         .status(409)
         .json({ message: "User already exist with this username!" });

   const user = new UserModel({
      username: username,
      password: password,
   });

   await user.save();

   return res.status(200).json({ user });
};

const deleteUsers = async (req, res) => {
   const deletedUsers = await UserModel.deleteMany();
   return res.status(200).json({ deletedUsers });
};

const deleteById = async (req, res) => {
   const { _id } = req.params;

   const deletedUser = await UserModel.deleteOne({ _id });
   return res.status(200).json({ deletedUser });
};

const getUserById = async (req, res) => {
   const { _id } = req.params;

   const user = await UserModel.findById({ _id });

   return user
      ? res.status(200).json({ user })
      : res.status(404).json({ message: "User not found!", user });
};

const updateUserById = async (req, res) => {
   const { username, password } = req.body;
   const { _id } = req.params;

   const user = await UserModel.updateOne({ _id }, { username, password });

   //    const user = await UserModel.findOneAndUpdate(
   //       { _id },
   //       { username, password },
   //       {
   //          new: true,
   //       }
   //    );

   return user.modifiedCount
      ? res.status(200).json({ user })
      : res.status(404).json({ message: "Failed to update user", user });
};

module.exports = {
   getUsers,
   createUser,
   deleteUsers,
   deleteById,
   getUserById,
   updateUserById,
};
