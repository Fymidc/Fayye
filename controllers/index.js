const Products = require('../models/ProductData');
const data=require('../api/index')

const getItem = async (req,res)=>{ 
   
   // console.log(data.module[0].productname)
    try {
        new Products({productImg:data.module[0].imgURL,
            productName:data.module[0].productname,
            productPrice:data.module[0].productprice}).save()

    } catch (error) {
        res.status(409).json({
            message:error.message,
        });
    }
}

module.exports = getItem;

const showItem = async (req,res)=>{ 
   
    // console.log(data.module[0].productname) 
    Products.findOne({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
 }
 
 module.exports = showItem