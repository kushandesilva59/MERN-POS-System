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

router.get('/lastOrder', async (req, res) => {
console.log("inside last ordert get method")

   try {
      const order = await Order.find().sort({ orderId: -1 }).limit(1);
      res.send(order);
      console.log(`Send order ..  id ${order.orderId}`);

   } catch (error) {
      console.log(error)
   }
});

//get last cus id
router.get("/lastOrderId", async (req, res) => {
   try {
      const order = await Order.find().sort({orderId:-1}).limit(1);
      const orderId = order.orderId;
      res.send(orderId);
      console.log("Send order id..");
   } catch (error) {
      return error;
   }
});

module.exports = router;
