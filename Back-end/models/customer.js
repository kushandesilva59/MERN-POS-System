const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    cusId : {
        type : Number,
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
        required : true,
        unique:true
    },
    cusPassword:{
        type: String,
        required : true
    }
});

module.exports = mongoose.model('customer',customerSchema)