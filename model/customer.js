const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
    username: String,
    name: String,
    address: String,
  });
  
  const Customers = mongoose.model("customers", customersSchema);


  module.exports = Customers