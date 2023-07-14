const express = require('express')
const mongoose = require('mongoose')
const app = express();
var cors = require('cors')

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json());


const customerRoute = require('./routes/CustomerRoute');

app.use(customerRoute);

const DB_URI = 'mongodb://127.0.0.1:27017/MERN'



const PORT = 8080;

mongoose.connect(DB_URI,{}).
 then(()=>{
    console.log("DB connected")
    app.listen(PORT,()=>{
        console.log(`API Running on ${PORT}`)
    })
}).catch((err)=>{
    console.error(err)
});
