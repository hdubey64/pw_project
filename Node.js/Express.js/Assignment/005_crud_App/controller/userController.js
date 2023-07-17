const userModel = require("../models/userSchema");

const userRegistration = async (req, res) => {
   const { name, email, password } = req.body;
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
      res.status(400).json({
         success: false,
         message: e.message,
      });
   }
};

module.exports = { userRegistration };
