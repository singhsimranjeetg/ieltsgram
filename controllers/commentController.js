const Comment = require('../models/Comment')





exports.create =  function(req, res) {
    console.log("begin", req.body.comment)
  let comment = new Comment(req.body, req.session.user._id)
    comment.create().then( function() {
    console.log("after modal")
    req.flash("success", "New Comment successfully created.")
    req.session.save(() => res.redirect(`/`))
  }).catch(function(errors) {
    errors.forEach(error => req.flash("errors", error))
    req.session.save(() => res.redirect("/"))
  })
}


