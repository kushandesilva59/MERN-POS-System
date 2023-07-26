const mongoose = require('mongoose')

const tempSchema = new mongoose.Schema({
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

module.exports = mongoose.model('temp',tempSchema)