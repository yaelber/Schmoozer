var models  = require('../models');
var express = require('express');
var router = express.Router();

// DELETE /comments/:id
router.delete('/:id', function(request, response, next) {
  // created a flag called `postId` that will capture the comment's post ID
  // once models.comments.findById promise is fulfilled.
  var postId;
  models.comments.findById(request.params.id)
    .then(function commentFindSuccess(comment){
      postId = comment.postId;
      return comment.destroy(); // this is also a promise! Chain it.
    }, function commentFindFailed(error) {
      next(error);
    })
    // now this is handling the promise of the destroy
    .then(function destroySucceeded() {
      // assume DELETE comes from the show post page
      // TODO: DRY this code. It is repeated in posts.js
      return models.posts.findById(postId, {
        include: [models.comments],
        order: [
          [{model: models.comments}, 'createdAt', 'DESC']
        ]
      });
    }, function destroyFailed(error) {
      next(error);
    })
    .then(function postFindSucceeded(post) {
      response.render('post', {
        post: post,
        message: 'Your comment was successfully deleted!'
      });
    }, function postFindFailed(error) {
      next(error);
    })
});

module.exports = router;
