const express = require('express');
const router = express.Router();

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const session = require('express-session')
const cookieParser = require('cookie-parser');

const Account = require('../../models/account');

const register = require('./handlers/register')
const login = require('./handlers/login')
const logout = require('./handlers/logout')

router.use( cookieParser() );
router.use( session({ secret: 'supersecretworddonottelltoanyone' }) );

router.use( passport.initialize() );
router.use( passport.session() );

passport.use( new LocalStrategy( Account.authenticate() ) );
passport.serializeUser( Account.serializeUser() );
passport.deserializeUser( Account.deserializeUser() );

router.post('/register', register.bind(null, passport) );
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);

module.exports = router;