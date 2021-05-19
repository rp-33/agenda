'use strict';

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');
let cors = require('cors');
let router = require('./routes');
let staticRoute = require('./staticRoute');

let app = express();

global.config = require('./config.js');
app.set('port',global.config.server.port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/uploads', express.static(__dirname +'/uploads'));

/*configuration router*/
staticRoute.config(express,app);

router(app)

module.exports = app;
