const Comment = require('../models/Comment')





exports.create =  function(req, res) {
  let Comment = new Comment(req.comment, req.session.user._id)
    Comment.create().then( function(newId) {
   
    req.flash("success", "New Comment successfully created.")
    req.session.save(() => res.redirect(`/`))
  }).catch(function(errors) {
    errors.forEach(error => req.flash("errors", error))
    req.session.save(() => res.redirect("/"))
  })
}


