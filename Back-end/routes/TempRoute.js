const express = require("express");
const Temp = require("../models/Temp");


const router = express.Router();

//save order
router.post('/tempSaveOrder', async (req, res) => {

    console.log("inside save order")
 
    try {
       console.info("Req order : ", req.body);
       const data = await Temp.create(req.body);
       res.send("Order saved!..")
    } catch (error) {
       return error;
    }
 });