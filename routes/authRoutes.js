const passport = require('passport');
const axios = require('axios')

const data = require('../api/index')
const createItem=require('../controllers/index.js')




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
        res.send(req.user);
    });

    app.get('/api/current_user', (req,res)=>{
        res.send(req.user);
    });

    
    app.get('/api/items',(req,res)=>{
       res.send(data)
        
    })

    app.use('/api/cart',createItem)
    
    
}
