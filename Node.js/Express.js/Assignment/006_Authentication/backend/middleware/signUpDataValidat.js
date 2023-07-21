const emailValidator = require("email-validator");

const signUpDataValidat = (req, res, next) => {
   const { name, email, password, userName, bio } = req.body;

   console.log(name, email, userName, password, bio);
   if (!name || !email || !password || !userName || !bio) {
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

   next();
};

module.exports = signUpDataValidat;
