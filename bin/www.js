var debug = require('debug')('blogger');
var app = require('../server');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

//LISTEN
console.log('start server...')
var server = app.listen(app.get('port'), function() {
console.log('Server listening on localhost:' + server.address().port);
debug('Express server listening on port ' + server.address().port);
});