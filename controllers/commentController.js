const Comment = require('../models/Comment')
const postController = require('./postController')




exports.create =  function(req, res) { 
  
  let comment =  new Comment(req.body, req.session.user._id, req.session.user.username, req.params.id)   
    comment.create().then( function() {
    req.flash("success", "New Comment successfully created.")
    req.session.save(() => res.redirect(`/post/${req.params.id}`))
  }).catch(function(errors) {
    errors.forEach(error => req.flash("errors", error))
    req.session.save(() => res.redirect("404"))
  })
}



exports.findCommentsByPostId = async function(postId) {
  // ask our commet model for comments by a certain author id
  let commentsList = [];
  await Comment.findByPostId(postId).then(function(comments) { 
    
    commentsList = comments;
  })
  return commentsList

}