var debug = require('debug')('blogger');
var app = require('../server.babel');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

// models.sequelize.sync().then(function() {
//   const server = app.listen(app.get('port'), function() {
//     console.log('Server listening on localhost:' + server.address().port);
//     debug('Express server listening on port ' + server.address().port);
//   });
// });

app.route("*").get(function(req, res) {
  console.log('WWW,JS>>>>>>>>>>>>>>>')
response.sendFile(__dirname + '/public/index.html')
});

//LISTEN
console.log('start server...')
var server = app.listen(app.get('port'), function() {
console.log('Server listening on localhost:' + server.address().port);
debug('Express server listening on port ' + server.address().port);
});

