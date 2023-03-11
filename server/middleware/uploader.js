const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: "images/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix + "_" + file.originalname)
    }
})

const uploader = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // const supportedImage = /png|jpg/;
        const supportedImage = /jpeg|jpg|webp|png/;
        const extension = path.extname(file.originalname)

        if (supportedImage.test(extension)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported image format'));
        }
    },
    limits: {
        fileSize: 5000000
    }
})

module.exports = uploader;