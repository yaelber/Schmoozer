var Sequelize = require('sequelize');

// new Sequelize('database', 'username', 'password', options)
var db = new Sequelize('yaelbercow', 'yaelbercow', '', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;