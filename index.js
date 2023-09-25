const express = require("express");
const customerRoutes=require("./routes/customerRoutes");
const productRoutes=require("./routes/productRoutes");
const dbConnection=require("./utils/db");
require("dotenv").config();

const port = process.env.PORT || 3000;
const host=process.env.HTTP_HOST || 'localhost'; //127.0.0.1
const app = express();
app.use(express.json());

dbConnection();

app.use("/customers",customerRoutes)
app.use("/",productRoutes)

app.get("/", async (req, res) => {
  res.send(`express server is running on ${port}...`);
});

app.listen(port, host, () => {
  console.log("listening on port " + port);
});
