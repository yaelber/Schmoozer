var db = require('../db');
var Sequelize = require('sequelize');

var User = db.define('users', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// hasOne adds a uniqueness constraint on
// the foreign key column of its target

module.exports = User;