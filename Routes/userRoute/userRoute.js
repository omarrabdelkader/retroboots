const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../../Controllers/userController/userController");
const { protect } = require("../../Middlewares/authMiddleware");
router.get("/users/user", protect, getUser);
router.post("/users/registeration", registerUser);
router.post("/users/login", loginUser);

module.exports = router;
