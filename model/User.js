const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [8, 'Password should have a minimum of 8 characters'],
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
