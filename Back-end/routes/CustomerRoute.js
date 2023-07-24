const express = require('express')
const router = express.Router();
const Customer = require('../models/customer');
const customer = require('../models/customer');


// save
router.post('/save', async (req, res) => {
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

// Handle the login request
router.post('/login', async (req, res) => {
   console.log("Customer route =>  ",req.body)

   const { cusEmail, cusPassword } = req.body;
 
   try {
     // Query the database to find the customer with the provided username and password
     const customer = await Customer.findOne({ cusEmail, cusPassword });
 
     // Check if the customer exists
     if (customer) {
       // Customer exists, login is successful
       res.status(200).json({ message: 'Login successful' });
     } else {
       // Customer does not exist or invalid credentials
       res.status(401).json({ message: 'Invalid credentials' });
     }
   } catch (err) {
     // Handle any potential errors
     res.status(500).json({ message: 'An error occurred' });
   }
 });

 router.post('/exist',async(req, res)=>{
      // console.log("Inside customer route => ",req.body);

      const {cusEmail} = req.body;

      try{
         //check received email address is exist
         const customer = await Customer.findOne({cusEmail});

            if(customer){
                  res.status(400).json({message:"Registration failed. Email is already exists"});
            }else{
               res.status(200).json({message:"Registration succesfull"});
            }
         

      }catch(error){
         res.status(500).json({ message: 'An error occurred' ,error});
         console.error(error)
      }
 });

 //get last Customer
router.get("/lastCustomer", async (req, res) => {
   try {
      const customer = await Customer.find().sort({cusId:-1}).limit(1);
      res.send(customer);
      console.log("Send Customer..");
   } catch (error) {
      return error;
   }
});
 

//get last cus id
router.get("/lastCustomerId", async (req, res) => {
   try {
      const customer = await Customer.find().sort({cusId:-1}).limit(1);
      const cusId = customer.cusId;
      res.send(cusId);
      console.log("Send Customer id..");
   } catch (error) {
      return error;
   }
});
 
 
 
 
 



module.exports = router;