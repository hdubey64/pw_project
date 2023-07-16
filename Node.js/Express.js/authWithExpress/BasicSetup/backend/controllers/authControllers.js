const userModel = require("../models/userSchema");
const emailValidator = require("email-Validator");

const signup = async (req, res, next) => {
   const { name, email, password, confirmPassword } = req.body;
   console.log(name, email, password, confirmPassword);
   if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
         success: false,
         message: "Every field is required",
      });
   }

   const validEmail = emailValidator.validate(email);
   if (!validEmail) {
      return res.status(400).json({
         success: false,
         message: "Please Provide a valid email address",
      });
   }

   if (password !== confirmPassword) {
      return res.status(400).json({
         success: false,
         message: "Password and Confirm Password did not match",
      });
   }

   try {
      const userInfo = userModel(req.body);

      const result = await userInfo.save();

      return res.status(200).json({
         success: true,
         data: result,
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

const signIn = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({
            success: false,
            message: "Every field is mandatory",
         });
      }

      const user = await userModel.findOne({ email }).select("+password");

      if (!user || user.password !== password) {
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
      res.status(200).json({ success: true, data: user });
   } catch (error) {
      res.status(400).json({ success: false, message: e.messaeg });
   }
};

const getUser = async (req, res) => {
   const userID = req.user.id;
   console.log("UserID", userID);
   try {
      const user = await userModel.findById(userID);
      console.log("user", user);
      return res.status(200).json({
         success: true,
         data: user,
      });
   } catch (e) {
      return res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

//User logout generate new cookie set it null for logut
const logout = async (req, res) => {
   try {
      // Generatting new cookie
      const cookieOption = {
         maxAge: Date.now(),
         httpOnly: true,
      };
      res.cookie("token", null, cookieOption); // Setting cookie null for logout
      res.status(200).json({
         success: true,
         message: "Logged out successfully",
      });
   } catch (e) {
      console.log(e);
      res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

module.exports = {
   signup,
   signIn,
   getUser,
   logout,
};
