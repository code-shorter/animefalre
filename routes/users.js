const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect("mongodb+srv://readeruser:9BA9jiFzRsyw1GML@cluster0.neserka.mongodb.net/animeflare
");

// models/User.js
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  userPic: {
    type: String
  },
  allowNotification: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.plugin(passportLocalMongoose);

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
