var db = require('../db');
var Sequelize = require('sequelize');

var Post = db.define('posts', {
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING
  }
});

module.exports = Post;