const mongoose = require("mongoose");
require("dotenv").config();


function connect() {
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("database connection established");
    })
    .catch((err) => {
      console.log("database connection error", err);
    });    
}

module.exports = connect;
