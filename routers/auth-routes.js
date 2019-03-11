router = require('express').Router();

//auth login
router.get('/login', function(req, res){
    res.render('login');
});

//auth logout
router.get('/logout', function(req, res){
    res.send('logout');
});

// auth with gmail
router.get('/gmail', function(req, res){
    //handle with gmail
    res.send('logging in with google');
});

module.exports = router;