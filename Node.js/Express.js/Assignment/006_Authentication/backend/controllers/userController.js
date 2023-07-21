const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
   try {
      const userInfo = new userModel(req.body);

      const result = await userInfo.save();

      return res.status(200).json({
         success: true,
         message: "Ragistered successfully",
      });
   } catch (e) {
      if (e.code === 11000) {
         return res.status(400).json({
            success: false,
            message: "Account already exists with provided email id",
         });
      }
      return res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

const logIn = async (req, res) => {
   try {
      const { userName, password } = req.body;

      if (!userName || !password) {
         return res.status(400).json({
            success: false,
            message: "Every field is mandatory",
         });
      }

      const user = await userModel.findOne({ userName }).select("+password");

      if (!user || !(await bcrypt.compare(password, user.password))) {
         return res.status(400).json({
            success: false,
            message: "Imvalid credentials",
         });
      }

      const token = user.jwtToken();
      user.password = undefined;

      const cookieOption = {
         maxAge: 60 * 60 * 24 * 1000,
         httpOnly: true,
      };

      res.cookie("token", token, cookieOption);
      res.status(200).json({ success: true, msg: "Loggedin sucessfully" });
   } catch (e) {
      console.log(e);
      res.status(400).json({ success: false, message: e.message });
   }
};

const homePage = async (req, res) => {
   const user = await userModel.findById(req.user.id);
   return res.status(200).json({
      success: true,
      data: user,
   });
};

module.exports = {
   signup,
   logIn,
   homePage,
};
