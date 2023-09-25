const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productName: String,
    productCategory: String,
    quantity: Number,
    isAvailble: Boolean,
    rating: Object,
  });
  
  // Model
  const Products = mongoose.model("products", productsSchema);

  module.exports =Products;