const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/productList')
.then(()=> console.log('db connected'))
.catch((err) => console.log(err))

app.use(express.json())

app.use('/product',routes)

const port = 4300

app.listen(port, ()=>{
    console.log("Server  is up on 4300");
})