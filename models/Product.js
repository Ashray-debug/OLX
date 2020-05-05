const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  image1: {
    data: Buffer, contentType: String
  },
  image2: {
   data: Buffer, contentType: String
  },
  image3: {
    data: Buffer, contentType: String
  }
  price: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('Product', ProductSchema);

module.exports = Product;
