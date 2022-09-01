const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  avatar: String,
  created_at: Date,
  // role: String
  role: {
    type: String,
    enum: ['admin', 'student', 'teacher'] 
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;