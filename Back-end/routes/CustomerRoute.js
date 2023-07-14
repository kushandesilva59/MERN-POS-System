const express = require('express')
const router = express.Router();

const Customer = require('../models/customer')

router.post('/customer/save',async(req,res)=>{
   try{
    console.log("Request customer  :",req.body);
    const newCustomer = await Customer.create(req.body);
    res.send("Customer saved succesfully");
   }catch(error){
        return error;
   }
});

module.exports = router;