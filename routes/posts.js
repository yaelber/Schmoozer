const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// GET /posts
// show all posts
router.get('/', function(request, response, next) {
  Post.findAll({
    include: [User]
  }) // default order: modifiedAt
    .then(function(posts) {
      console.log(posts);
      response.render('index', { posts: posts });
    });
});

// GET /posts/new
// create post
router.get('/new', function(request, response, next) {
  response.render('new_post', { post: {} });
});

router.post('/new', function(request, response, next) {
  Post.create(request.body)
    .then(function saved(post) {
      response.redirect('../posts/' + post.id); // GET /posts/:id
    });
});

// GET /posts/:id
// show post
router.get('/:id', function(request, response, next) {
  Post.findById(request.params.id)
  .then(function(post) {
    response.render('post', { post: post });
  })
  .catch(function(error) {
    next(error);
  });
});

// POST /posts/:id
// edit post
router.post('/:id/edit', function(request, response) {
  Post.findById(request.params.id)
  .then(function(post){
    post.title = request.body.title;
    post.body = request.body.body;
    post.modifiedAt = new Date();
    post.save()
      .then(function(){
        response.redirect('../'); // GET /posts
    });
  });
});


module.exports = router;
