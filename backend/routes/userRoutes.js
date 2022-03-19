const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//! Can be done in 2 ways
router.route("/").post(registerUser).get(protect, allUsers); //!Chaining
router.post("/login", authUser); //!directly

module.exports = router;
