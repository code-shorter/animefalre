const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userPic: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  animeId: {
    type: String,
    required: true
  },
  seasonId: {
    type: String,
    required: true
  },
  episodeId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
