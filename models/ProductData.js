const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    productImg:String,
    productName:String,
    productPrice:String
})

const Products = mongoose.model('product',productSchema);

module.exports=Products;