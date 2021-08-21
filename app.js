'use strict'

const express = require('express');
const path = require('path');
const favicon = require('server-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator=require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const logger = require('morgan');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mvclogin');

// Express Routes

let routes = require('./routes/index');
let users = require('./routes/users');

// App Initialization

const app = express();

// Set static folder for Express (static files)

app.use(express.static(path.join(__dirname, 'public')));