passport = require('passport');
GoogleStrategy = require('passport-google-oauth20');
ClientJWTBearerStrategy = require('passport-oauth2-jwt-bearer').Strategy;
keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //option for google
        callbackURL: './auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,

    }, () => {
        //passport callback function
    })
);