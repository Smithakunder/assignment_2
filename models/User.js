// models/User.js
const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  // Define your user schema
  // You can include other fields here
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Reference to blogs
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

module.exports = mongoose.model('User', userSchema);
