const express = require("express");
const Order = require("../models/order");


const router = express.Router();

//save order
router.post('/saveOrder',async(req, res)=>{
   
 try {
        console.info("Req order : ",req.body);
        const data = await Order.create(req.body);
        res.send("Order saved!..")
     } catch (error) {
        return error;
     }
});


//get All Orders
router.get("/orders", async (req, res) => {
   try {
      const ordererList = await Order.find();
      res.send(ordererList);
      console.log("Send order list!..");
   } catch (error) {
      return error;
   }
});

module.exports = router;
