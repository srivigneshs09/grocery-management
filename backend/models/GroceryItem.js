const mongoose = require('mongoose');

const GroceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('GroceryItem', GroceryItemSchema);
