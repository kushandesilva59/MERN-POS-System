const express = require("express");
const Order = require("../models/order");


const router = express.Router();

//save order
router.post('/saveOrder', async (req, res) => {

   console.log("inside save order")

   try {
      console.info("Req order : ", req.body);
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

router.post('/lastOrder', async (req, res) => {
   try {
      const order = await Order.find().sort({ orderId: -1 }).limit(1);
      res.send(order);
      console.log("Send order..");

   } catch (error) {
      console.log(error)
   }
})

module.exports = router;
