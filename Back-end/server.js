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
const itemRoute = require('./routes/ItemRoute');

app.use(customerRoute);

const DB_URI = 'mongodb://localhost:27017/MERN'

const url = 'mongodb+srv://kushandesilva801:OQnffEmB4HLnASTM@cluster0.7neeooa.mongodb.net/?retryWrites=true&w=majority'




const PORT = 8000;


mongoose.connect(url,{}).
 then(()=>{ 
    console.log("DB connected")
    app.listen(PORT, ()=>{
        console.log(`API Running on ${PORT}`)
    });
}).catch((err)=>{
    console.error("Error :",err)
});
