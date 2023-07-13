const express = require('express')
const router = express.Router();

const Customers = require('../models/customer')

//save customer
router.post('/customer/save',(req,res)=>{
    let newCustomer = new Customers(req.body);

    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({
                errror : err
            });
        }

        return res.status(200).json({
            success : "Customer successfully saved!.."
        });
    });
});

module.exports = router;