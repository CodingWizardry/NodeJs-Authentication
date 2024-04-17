const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

function init(passport) {
    passport.use(new LocalStrategy(User.authenticate()));
    passport.use(User.createStrategy());


    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}
module.exports = init;