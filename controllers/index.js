const Products = require('../models/ProductData');
const mongoose= require('mongoose')
const Cart = require('../models/Cart');
const data=require('../api/index')

const User = require('../models/User')

const getItem = async (req,res)=>{ 
   
    console.log("inserted") 

    try {
        for(let i=0;i<data.module.length;i++){
            new Products({productImg:data.module[i].imgURL,
                productName:data.module[i].productname,
                productPrice:data.module[i].productprice}).save()
    }
    } catch (error) {
        res.status(409).json({
            message:error.message,
        });
    }
}


const showItem = async (req,res)=>{ 
   // console.log(data.module[0].productname) 
    Products.find((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
}

const deleteItem = async (req,res)=>{ 
    const {_id}=req.body
    //console.log(_id)
    try {
        deletedItem=await Cart.findByIdAndRemove(_id)
        res.json(deletedItem)
    } catch (error) {
        res.status(409).json({
            message:error.message,
        });
    }
    
}


const addtoChart = async (req,res)=>{ 
   
   console.log(req.user)
   const {productImg,productName,productPrice} = req.body;

   const cart= new  Cart({
       image:productImg,
       title:productName,
       price:productPrice,
       _user:req.user.id
   })



   if(req.body.productImg){ 
    await cart.save();
    }
   

   try{
    
    Cart.find((err,result)=>{
        if(err) throw err;
        
        res.send(result)
    })
   

    
   }catch(error){
    res.status(409).json({
        message:error.message
    })
   }
   
    
}

module.exports={
    getItem,
    showItem,
    addtoChart,
   deleteItem
}


 /*
if(JSON.stringify(cart._user)!==JSON.stringify(req.user.id)){
            console.log("aynı degil")
        } 

  new Products({productImg:data.module[0].imgURL,
            productName:data.module[0].productname,
            productPrice:data.module[0].productprice}).save()

            */