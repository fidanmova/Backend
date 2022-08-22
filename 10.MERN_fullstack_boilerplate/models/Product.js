const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_title: String,
  price: Number,
  quantity: Number,
  created_at: Date,
  added_by: {
    type: Schema.Types.ObjectId,
    ref: 'User' 
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;