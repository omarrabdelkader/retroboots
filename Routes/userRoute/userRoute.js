const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../../Controllers/userController/userController");

router.get("/users/user", getUser);
router.post("/users/registeration", registerUser);
router.post("/users/login", loginUser);

module.exports = router;
