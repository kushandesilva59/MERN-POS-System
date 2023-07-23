const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    cusId : {
        type : String,
        required:true
    },
    cusName:{
        type: String,
        required : true
    },
    cusAddress:{
        type: String,
        required : true
    },
    cusEmail:{
        type: String,
        required : true
    },
    cusPassword:{
        type: String,
        required : true
    }
});

module.exports = mongoose.model('customer',customerSchema)