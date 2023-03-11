const mongoose = require("mongoose");

const sendMessageSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    reply:{
        type: String,

    },
    createdAt: {
        type: Date,
        expires: 10 // expires in 1 minute
    },
})

const SendMessage = mongoose.model("SendMessage", sendMessageSchema);

module.exports = SendMessage;


