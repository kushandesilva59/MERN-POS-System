const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required:true
    },
    description:{
        type: String,
        required : true
    },
    qtyOnHand:{
        type: String,
        required : true
    },
    unitPrice:{
        type: String,
        required : true
    }
});

module.exports = mongoose.model('item',itemSchema)