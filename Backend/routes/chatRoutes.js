const express = require("express");
const { protect } = require("../middleWare/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroup,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroup);
router.route("/rename").put(protect, renameGroup);
router.route("/groupeadd").put(protect, addToGroup);
router.route("/grouperemove").put(protect, removeFromGroup);

module.exports = router;
