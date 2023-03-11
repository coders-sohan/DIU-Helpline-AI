
const SendMessage = require("../Models/SendMessage");

exports.AddSendMessageController = (req, res) => {
    //    post category
    const message = new SendMessage(req.body);
    message.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to save message in DB"
            });
        }
        res.json({ message });
    });
}

exports.getSendMessage = (req, res) => {
    SendMessage.find().exec((err, message) => {
        if (err) {
            return res.status(400).json({
                error: "Message not found"
            });
        }
        res.json(message);

    }
    )

}


exports.deleteSendMessage = (req, res) => {
    // delete all Send Message
    SendMessage.deleteMany().exec((err, message) => {
        if (err) {
            return res.status(400).json({
                error: "Message not found"
            });
        }
        res.json(message);
    }
    )
}
