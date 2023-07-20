const express = require('express')
const router = express.Router();
const Item = require('../models/item')


router.post("/item/save",async (req,res)=>{
    console.log("Save item  ",res.body);
    const data = await Item.create(req.body);
    res.send("Item Saved Successfully!!");
});