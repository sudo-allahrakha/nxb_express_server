const Products=require('../model/product');

let getProducts=async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ statusCode: 200, data: products });
  } catch (error) {
    console.log(error);
  }
}


// Todo: getProduct , createProduct, deleteProduct



module.exports = {getProducts}