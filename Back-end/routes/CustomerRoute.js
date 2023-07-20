const express = require('express')
const router = express.Router();
const Customer = require('../models/customer')


// save
router.post('/customer/save', async (req, res) => {
   try {
      console.log("Request customer  :", req.body);
      const newCustomer = await Customer.create(req.body);
      res.send("Customer saved succesfully");
   } catch (error) {
      return error;
   }
});

//get All Customers
router.get("/getCustomers", async (req, res) => {
   try {
      const customerList = await Customer.find();
      res.send(customerList);
      console.log("Send Customers list!..");
   } catch (error) {
      return error;
   }
});

router.get("/getCustomer:customerId", async (req, res) => {
   try {
      const customerId = req.params.customerId;
      const customer = Customer.findById(customerId);

      const customerList = await Customer.find();
      res.send(customer);
      console.log("Send Customer!..");
   } catch (error) {
      return error;
   }
});



module.exports = router;