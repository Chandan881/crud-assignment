const mongoose = require('mongoose');


// product-name, descr.. & price

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    },
})

const Product = mongoose.model('ProductTable', productSchema)

module.exports = Product;