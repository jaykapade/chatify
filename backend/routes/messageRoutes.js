const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
