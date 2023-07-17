const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  age: {
    type: Number,
    required: [true, 'Please enter your age'],
  },
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
    required: [true, 'Please provide an image'],
  },
});

module.exports = mongoose.model('User', UserSchema);
