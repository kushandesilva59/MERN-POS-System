const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderId : {
        type : String,
        required : true
    },
    customerId : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    details : {
       
    }

});

module.exports = mongoose.model('order',orderSchema);