
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

    // SendMessage.find({}).where('expiresAt').lt(new Date()).exec(function (err, message) {
    //     if (err) {
    //         return res.status(400).json({
    //             error: "Message not found"
    //         });
    //     }
    //     res.json(message);
    // });
}


exports.deleteSendMessage = (req, res) => {
    //  delete category
    const id = req.params.id
    SendMessage.findByIdAndDelete(id).exec((err, message) => {
        if (err) {
            return res.status(400).json({
                error: "message not found"
            });
        }
        res.json(message);
    }
    );
}
