const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    image:String,
    title:String,
    amount:Number
})

module.exports=cartSchema;