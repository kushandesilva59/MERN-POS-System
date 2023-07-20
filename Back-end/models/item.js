const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemCode : {
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