const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  role: { type: String, enum: ['customer', 'restaurant', 'delivery'], default: 'customer' }
});

module.exports = mongoose.model('User', UserSchema);
