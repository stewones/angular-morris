var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();

var prerender = require('prerender-node');
app.use(require('prerender-node')
    //.set('prerenderServiceUrl', 'http://render.herokuapp.com')
);
app.use(express.static(__dirname + '/'));
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//
// handle robots.txt
//
app.get('/robots.txt', function (req, res) {
    res.sendFile(__dirname + '/robots.txt');
});
//
// handle all gets
//
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//
// Listen the app
//
app.listen(process.env.PORT || 3002);

//
// Error handler
//
function handleError(res, err) {
    return res.status(500).send(err);
}