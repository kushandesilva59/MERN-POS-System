const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderId : {
        type : Number,
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
    details: {
        type: [
            {
                itemName: String,
                quantity: Number,
                price: Number
            }
        ]
    }

});

module.exports = mongoose.model('order',orderSchema);