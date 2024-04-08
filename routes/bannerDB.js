const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    bannerImage: {
        type: String,
    },
    animeName: {
        type: String,
    },
    link: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
