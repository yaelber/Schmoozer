var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('babel-register');
var debug = require('debug')('blogger');
var app = require('../server.babel');
var models = require("../models");
var twilio = require('../routes/twilio');
var app = express();

app.set('port', process.env.PORT || 3000);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended: false,limit:'5mb'}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', twilio);
app.use('/api/sms', twilio);

// models.sequelize.sync().then(function() {
//   const server = app.listen(app.get('port'), function() {
//     console.log('Server listening on localhost:' + server.address().port);
//     debug('Express server listening on port ' + server.address().port);
//   });
// });


app.route("*").get(function(request, response) {
  console.log('WWW,JS>>>>>>>>>>>>>>>')
  response.sendFile(path.resolve(__dirname, '../public/index.html'));
});


//LISTEN
console.log('start server...')
var server = app.listen(app.get('port'), function() {
console.log('Server listening on localhost:' + server.address().port);
debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
