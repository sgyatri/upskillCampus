const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [{ name: String, quantity: Number, price: Number }],
  totalAmount: Number,
  status: { type: String, enum: ['pending', 'preparing', 'out-for-delivery', 'delivered'], default: 'pending' }
});

module.exports = mongoose.model('Order', OrderSchema);

