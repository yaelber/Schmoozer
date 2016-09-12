var db = require('../db');
var Sequelize = require('sequelize');

var Post = db.define('posts', {
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATEONLY,
    defaultValue: function() {
      return new Date();
    }
  },
  modifiedAt: {
    type: Sequelize.DATEONLY,
    defaultValue: function() {
      return new Date();
    }
  }
});

module.exports = Post;