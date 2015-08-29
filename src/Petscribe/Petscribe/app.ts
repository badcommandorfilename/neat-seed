import express = require('express');
import http = require('http');
import path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
//import favicon = require('serve-favicon');

var __dirname = path.resolve('.');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.methodOverride());

//Static content paths
import stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/include/requirejs', express.static(__dirname + '/node_modules/requirejs/'));
app.use('/include/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/include/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/include/angular-ui-bootstrap', express.static(__dirname + '/node_modules/angular-ui-bootstrap/'));

import home = require('./routes/home');
import api = require('./routes/api');
import contacts = require('./routes/contacts');
import products = require('./routes/products');

app.use('/', home);
app.use('/api', api);
app.use('/contacts', contacts);
app.use('/products', products);
//app.get('/users', user.list);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = {
        status : 404,
        message : 'Not Found'
    };
    //res.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (req, res, next) {
        res.status(res.statusCode || 500);
        res.render('error', {
            message: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (req, res, next) {
    res.status(res.statusCode || 500);
    res.render('error', {
        message: 'error'
    });
});



http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
