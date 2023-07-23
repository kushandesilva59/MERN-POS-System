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
const orderRoute = require('./routes/OrderRoutes')

app.use('/customer',customerRoute);
app.use(orderRoute);
app.use(itemRoute);

const PORT = 8000;

const dbConnection = 'mongodb://127.0.0.1:27017/MERN'

mongoose.connect(dbConnection, {
 
})
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
  });
