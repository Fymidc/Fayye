const passport = require('passport');
const requireLogin=require('../middlewares/requireLogin')
const axios = require('axios')

const mongoose= require('mongoose')
const Cart = require('../models/Cart');


const data = require('../api/index')
const {addtoChart,getItem,showItem,deleteItem}=require('../controllers/index.js')



module.exports =(app)=>{ //app paramatresini server.js den aldık parametre olarak verdik express -app serverde tanımlı olduğundan 
    app.get('/auth/google',passport.authenticate('google', {
        scope: ['profile','email']
    }));

    app.get('/auth/google/callback',
     passport.authenticate('google'),
     (req,res)=>{
         res.redirect('/');
     })

    app.get('/api/logout', (req,res)=>{
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req,res)=>{
        res.send(req.user);
    });

    app.use('/api/items',showItem)
    

    app.use('/api/items/post',getItem)

    app.use('/api/cart',addtoChart)
    
    app.use('/api/cart-delete', deleteItem)
}
