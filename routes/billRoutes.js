const keys= require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports =app=>{
    app.post('/api/stripe',async (req,res)=>{
      const charge = await  stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 to continue',
            source:req.body.id

        });
        req.user.credits +=5; //user comes from passport
        const user= await req.user.save();//we save to daya base

        res.send(user);
    })
};