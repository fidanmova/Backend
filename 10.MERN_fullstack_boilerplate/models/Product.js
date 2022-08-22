const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // task: add object model for products here
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;