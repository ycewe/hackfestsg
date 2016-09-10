var Koa = require('koa');
var serve = require('koa-static');
var connections = require('./config/connections');

var url = connections.hostname + ':' + connections.port;

/**
 * Connection to database
 */
var mongoose = require('mongoose');
var dbConnection = mongoose.connect('mongodb://hackfestarun:hackfestarun@ds021016.mlab.com:21016/hackfestarun',
    function (err) {
        if (err) {
            console.log('Connection Error,err');
        }
        else {
            console.log('Connection Successful');
        }
    });

var app = Koa();

app.use(serve(__dirname + '/public'));

/**
 * Routings
 */
 var routing = require('./routes/routes');
app.use(routing.routes());
app.use(routing.allowedMethods());

var entry = require('./model/entrySchema');

/**
 * Starts the server and push users to the public page.
 */
app.listen(connections.port);

console.log('Serving on ' + url + ' in ' + connections.env);

module.exports = app;