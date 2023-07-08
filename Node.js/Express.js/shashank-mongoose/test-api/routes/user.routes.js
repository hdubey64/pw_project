const express = require("express");
const router = express.Router();
const {
   getUsers,
   createUser,
   deleteUsers,
   deleteById,
   getUserById,
   updateUserById,
} = require("../controllers/user.controller");

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/", deleteUsers);

router.delete("/:_id", deleteById);

router.get("/:_id", getUserById);

router.patch("/:_id", updateUserById);

module.exports = router;
