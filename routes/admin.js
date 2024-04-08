// routes/animeDB.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String
  },
  adminNo: {
    type: Number
  },
  password: {
    type: Number
  },
  email: {
    type: String
  },
  mailPassword: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
