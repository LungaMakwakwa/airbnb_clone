express = require('express');
authRoutes = require('./routers/auth-routes')
app = express();


//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('listening to port 3000');
});