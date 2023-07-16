const JWT = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
   console.log("Req.cookies", req.cookies);
   const token = (req.cookies && req.cookies.token) || null;

   if (!token) {
      return res.status(400).json({
         success: false,
         message: "Invalid token",
      });
   }

   try {
      const payload = JWT.verify(token, process.env.SECRET);
      req.user = { id: payload.id, email: payload.email };
      console.log("payload", payload.name);
      console.log("User.REQ", req.user);
   } catch (e) {
      console.log(e);
      return res.status(400).json({
         success: false,
         message: e.message,
      });
   }
   next();
};

module.exports = jwtAuth;
