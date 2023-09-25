const express = require("express");
const { getCustomers, getCustomer, createCustomer, deleteCustomer }=require("../controller/customerController")
const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", createCustomer);
router.delete("/:id", deleteCustomer);

// Todo : Update customer

module.exports = router;
