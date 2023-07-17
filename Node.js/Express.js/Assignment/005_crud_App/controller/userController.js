const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");

const userRegistration = async (req, res) => {
   const { name, email, password, confirmPassword } = req.body;

   if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
         success: false,
         message: "All input fields are required",
      });
   }
   const validEmail = emailValidator.validate(email);
   if (password !== confirmPassword) {
      return res.status(400).json({
         success: false,
         message: "Passwords and Confirmpassword did not match",
      });
   }
   if (!validEmail) {
      return res
         .status(400)
         .json({ success: false, message: "Please enter a valid email" });
   }
   try {
      const userInfo = userModel(req.body);
      const result = await userInfo.save();
      console.log(result);

      return res.status(200).json({
         success: true,
         data: result,
      });
   } catch (e) {
      console.log(e);
      return res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

const userLogin = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({
            success: false,
            message: "All input fields are required",
         });
      }
      const user = await userModel.findOne({ email }).select("+password");

      if (!user) {
         return res.status(400).json({
            success: false,
            message: "No account associate with this email",
         });
      } else if (password !== user.password) {
         return res
            .status(400)
            .json({ success: false, message: "Password is wrong" });
      }

      return res.status(200).json({
         success: true,
         message: `Hello ${user.name} you logged in succesfully`,
      });
   } catch (e) {
      console.log(e);
      return res.status(400).json({ success: false, message: e.message });
   }
};
module.exports = { userRegistration, userLogin };
