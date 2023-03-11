const express = require("express");
const { getSendMessage, AddSendMessageController, deleteSendMessage } = require("../Controllers/SendMessageController");

const router = express.Router();

router.route("/").get(getSendMessage).post(AddSendMessageController);
router.route("/delete").delete(deleteSendMessage);




module.exports = router;
