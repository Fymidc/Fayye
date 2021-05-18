const express = require ('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');
const authRoutes = require('./routes/authRoutes');


mongoose.connect(keys.mongoURI)
//videoda 2.20 de kaldım
const app =express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,  //ne kadar süre cookie yaşıyacak -30 gün
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize()); //expressin cookileri kullanmasın için 
app.use(passport.session());

authRoutes(app);//app parameteresini routelerde kullanmak için verdik çünkü express app burada çalışıyor.



const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server started on ${port}`));