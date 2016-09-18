var models  = require('../models');
var express = require('express');
var router = express.Router();

// DELETE /comments/:id
router.delete('/:id', function(request, response, next) {
  // created a flag called `postId` that will capture the comment's post ID
  // once models.comments.findById promise is fulfilled.
  console.log('delete comment route');
  var postId;
  models.comments.findById(request.params.id)
    .then(function commentFindSuccess(comment){
      postId = comment.postId;
      return comment.destroy(); // this is also a promise! Chain it.
    }, function commentFindFailed(error) {
      console.log('comment find failed');
      next(error);
    })
    // now this is handling the promise of the destroy
    .then(function destroySucceeded() {
      response.send(200);
    }, function destroyFailed(error) {
      console.log('destroy failed');
      next(error);
    });
});

module.exports = router;
