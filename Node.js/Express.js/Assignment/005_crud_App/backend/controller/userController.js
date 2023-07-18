const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

// User Rgistration
const userRegistration = async (req, res) => {
   try {
      // Destructuring the required fields from the request body
      const { name, email, password, confirmPassword } = req.body;

      //Checking input field is empty or not if any of the fields are empty returns from here
      if (!name || !email || !password || !confirmPassword) {
         return res.status(400).json({
            success: false,
            message: "All input fields are required",
         });
      }

      //Eamil validation through emailValidator if email is ot valid return from here
      const validEmail = emailValidator.validate(email);
      if (!validEmail) {
         return res
            .status(400)
            .json({ success: false, message: "Please enter a valid email" });
      }

      // Matching password against confirm password return from here
      if (password !== confirmPassword) {
         return res.status(400).json({
            success: false,
            message: "Passwords and Confirmpassword did not match",
         });
      }
      // Creating a new instance of the User model with the request body data
      const userInfo = userModel(req.body);

      // Saving the user information to the database
      const result = await userInfo.save();

      // Sending a successful response with the saved user data
      return res.status(200).json({
         success: true,
         data: result,
         message: `Hello! ${result.name}, now you can login`,
      });
   } catch (e) {
      // Return an error response with the error message if any error occurred
      return res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

// User user login
const userLogin = async (req, res) => {
   try {
      // Destructuring the required fields from the request body
      const { email, password } = req.body;

      // Check if email or password is missing
      if (!email || !password) {
         return res.status(400).json({
            success: false,
            message: "All input fields are required",
         });
      }

      // Find user by email in the database
      const user = await userModel.findOne({ email }).select("+password");

      // If user doesn't exist, return error
      if (!user) {
         return res.status(400).json({
            success: false,
            message: "No account associate with this email",
         });
      }

      // Compare the provided password with the hashed password in the database
      const passwordCheck = await bcrypt.compare(password, user.password);

      // If password doesn't match, return error
      if (!passwordCheck) {
         return res
            .status(400)
            .json({ success: false, message: "Password is wrong" });
      }

      // Successful login, return success message
      return res.status(200).json({
         success: true,
         message: `Hello ${user.name} you logged in succesfully`,
      });
   } catch (e) {
      // Return an error response with the error message if any error occurred
      return res.status(400).json({ success: false, message: e.message });
   }
};
module.exports = { userRegistration, userLogin };
