router = require('express').Router();
passport = require('passport');

//auth login
router.get('/login', function(req, res){
    res.render('login');
});

//auth logout
router.get('/logout', function(req, res){
    res.send('logout');
});

// auth with gmail
router.get('/google',passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect
router.get('/google/redirect', (req, res) => {
    res.send('you have logged in niqqah')
});


module.exports = router;