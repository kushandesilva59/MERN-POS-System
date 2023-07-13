const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

const customerRoute = require('./routes/CustomerRoute');

app.use(customerRoute);



const PORT = 8080;

mongoose.connect(
    "mongodb://127.0.0.1:27017/MERN"
).then(()=>{
    console.log("DB connected")
    app.listen(PORT,()=>{
        console.log(`API Running on ${PORT}`)
    })
}).catch((err)=>{
    console.error(err)
});
