var db = require('../db');
var Sequelize = require('sequelize');

var Profile = db.define('profiles', {
  bio: {
    type: Sequelize.STRING
  }
});

// belongsTo adds a foreign key column
// on its source
// Profile.belongsTo(User);
// the CHILD ITSELF has a reference to the PARENT

module.exports = Profile;