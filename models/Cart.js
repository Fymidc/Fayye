const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cartSchema = new Schema({
    
    image:String,
    title:String,
    price:Number,
    _user:{type:Schema.Types.ObjectId, ref:'User'}
});

const Cart=mongoose.model('cart',cartSchema);

module.exports = Cart;
