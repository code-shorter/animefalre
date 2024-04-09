const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Define storage for images
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Different File uploading paths for different cases
        // Check file type and set destination folder accordingly
        if (file.fieldname === 'posterImg') {
            cb(null, './public/images/posters'); // Destination folder for posters
        } else if (file.fieldname === 'thumbnail') {
            cb(null, './public/images/thumbnails'); // Destination folder for thumbnails
        } else if (file.fieldname === 'profileImg') {
            cb(null, './public/images/profile-img'); // Destination folder for profile Img
        } else if (file.fieldname === 'bannerImg') {
            cb(null, './public/images/banner'); // Destination folder for banner Img
        } else if (file.fieldname === 'seasonImg') {
            cb(null, './public/images/season'); // Destination folder for season Img
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: function (req, file, cb) {
        const uniqueFilename = uuidv4(); // Generate a unique filename using UUID
        cb(null, uniqueFilename + path.extname(file.originalname)); // Use the filename for the uploaded file
    }
});

const upload = multer({ storage: imageStorage });

module.exports = upload;

