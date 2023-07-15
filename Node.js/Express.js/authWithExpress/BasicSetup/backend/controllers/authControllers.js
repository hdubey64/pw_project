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

module.exports = {
   signup,
};
