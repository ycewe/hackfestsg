var Koa = require('koa');
var serve = require('koa-static');
var connections = require('./config/connections');
// var bodyParser = require('body-parser');

var app = Koa();
var url = connections.hostname + ':' + connections.port;

/**
 * Connection to database
 */
var mongoose = require('mongoose');
var dbConnection = mongoose.connect('mongodb://localhost/hackFest',
    function (err) {
        if (err) {
            console.log('Connection Error,err');
        }
        else {
            console.log('Connection Successful');
        }
    });


/**
 * Body Parser to parse the json object

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
*/


/**
 * Routings
 */
var routing = require('./routes/routes');
app.use(routing.routes());
app.use(routing.allowedMethods());

/**
 * Starts the server and push users to the public page.
 */
app.use(serve(__dirname + '/public'));
app.listen(connections.port);

console.log('Serving on ' + url + ' in ' + connections.env);

