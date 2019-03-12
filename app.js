express = require('express');
authRoutes = require('./routers/auth-routes')
app = express();
passportSetup = require('./config/passport-setup');

//set up view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static(__dirname + '/assets'));

//set up routes
app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.render('index');
});



app.listen(3000, ()=>{
    console.log('listening to port 3000');
});