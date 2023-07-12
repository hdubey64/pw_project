const express = require("express");

const {
   home,
   createuser,
   getUsers,
   deleteUser,
   editUser,
} = require("../Controller/userController");

const router = express.Router();

router.get("/", home);
router.post("/createuser", createuser);
router.get("/getusers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
