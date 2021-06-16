const express = require ('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors')
const keys = require('./config/keys');

require('./models/User')
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const billRoutes = require('./routes/billRoutes');


mongoose.connect(keys.mongoURI)
//videoda 2.20 de kaldım
const app =express();

app.use(bodyParser.json());

app.use(cors());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,  //ne kadar süre cookie yaşıyacak -30 gün
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize()); //expressin cookileri kullanmasın için 
app.use(passport.session());


authRoutes(app);//app parameteresini routelerde kullanmak için verdik çünkü express app burada çalışıyor.
billRoutes(app);//app parameteresini routelerde kullanmak için verdik çünkü express app burada çalışıyor.

if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets
    //like our main.js file or main.css
    app.use(express.static('client/build'))
    //express will serve up index.html file
    //if it doesnt recognize the route
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server started on ${port}`));