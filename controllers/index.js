const User = require('../models/User.js');

const createItem = async (req,res)=>{ 
    try {
        User.findOne({products:req.body});
        res.status(200).json();
        let user = new User({
            products:[req.body
            ]
        })
        await user.save();
    } catch (error) {
        res.status(409).json({
            message:error.message,
        });
    }
}

const getItem = async (req,res)=>{
    try {
        const items = await User.find();
        res.status(200).json(items)
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}

module.exports = createItem,getItem;