var Sequelize = require('sequelize');

// new Sequelize('database', 'username', 'password', options)
var db = new Sequelize('amy', 'amy', '', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;