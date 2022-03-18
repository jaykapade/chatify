const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

//! Can be done in 2 ways
router.route("/").post(registerUser); //!Chaining
router.post("/login", authUser); //!directly

module.exports = router;
