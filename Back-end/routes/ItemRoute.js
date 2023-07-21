const express = require('express')
const router = express.Router();
const Item = require('../models/item')


router.post("/item/save",async (req,res)=>{
   

       
 try {
    console.log("Save item  ",res.body);
    const data = await Item.create(req.body);
    res.send("Item Saved Successfully!!");
 } catch (error) {
    return error;
 }
});

//get All Items
router.get("/items", async (req, res) => {
    try {
       const itemList = await Item.find();
       res.send(itemList);
       console.log("Send item list!..");
    } catch (error) {
       return error;
    }
 });

 module.exports = router;