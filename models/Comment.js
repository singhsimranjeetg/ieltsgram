const postsCollection = require('../db').db().collection("posts")
const followsCollection = require('../db').db().collection("follows")
const commentsCollection  =  require('../db').db().collection("comments")
const ObjectID = require('mongodb').ObjectID
const User = require('./User')
const sanitizeHTML = require('sanitize-html')

let Comment = function(data, userId) {
  this.data = data
  this.errors = []
  this.userId = userId
/*  this.postId = postId
  this.commentId = commentId*/
  
}

Comment.prototype.cleanUp = function() {
  if (typeof(this.data.comment) != "string") {this.data.comment = ""}
 // if (typeof(this.data.body) != "string") {this.data.body = ""}

  // get rid of any bogus properties
  this.data = {
    comment: sanitizeHTML(this.data.comment.trim(), {allowedTags: [], allowedAttributes: {}}),
    createdDate: new Date(),
    author: ObjectID(this.userId),
   // postId: ObjectID(this.postId)
  }
}

Comment.prototype.validate = function() {
  if (this.data.comment == "") {this.errors.push("You must provide Comment content.")}
}

Comment.prototype.create = function() {
  return new Promise((resolve, reject) => {
      
    this.cleanUp()
    this.validate()
    if (!this.errors.length) {
      // save Comment into database
     commentsCollection.insertOne(this.data).then(() => {
        resolve()
        
      }).catch(() => {
        this.errors.push("Please try again later.")
        reject(this.errors)
      })
    } else {
      reject(this.errors)
    }
  })
}
  module.exports = Comment