var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  // res.render('index', { title: 'Express' });
  response.redirect('/posts');
});

module.exports = router;
