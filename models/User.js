const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema=require('./Cart');

const userSchema = new Schema({
    googleId: String,
    name : String,
    credits:{type:Number,default:0}
})


const User=mongoose.model('users',userSchema)

module.exports = User;


/*{
            productId:Number,
            productName:String,
            productQuantity:Number,
            productPrice:Number,
        }*/