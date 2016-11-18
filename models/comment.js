/*
// Create new comment in your database and return its id
exports.create = function(user, text, cb) {
  cb('12345')
}

// Get a particular comment
exports.get = function(id, cb) {
  cb(null, {id:id, text: 'Very nice example'})
}

// Get all comments
exports.all = function(cb) {
  cb(null, [])
}

// Get all comments by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}
*/

// Taken from https://www.terlici.com/2014/08/25/best-practices-express-structure.html
//==========================================================================================
var db = require('../db')

// Create new comment in your database and return its id
exports.create = function(user, text, cb) {
  var comment = {
    user: user,
    text: text,
    date: new Date().toString()
  }

  db.save(comment, cb)
}

/*
router.get('/:id', function(req, res) {
  Comment.get(req.params.id, function (err, comment) {
    res.render('comments/comment', {comment: comment})
  })
})
*/

// Get a particular comment
exports.get = function(id, cb) {
  db.fetch({id:id}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0])
  })
}

/*
router.get('/', function(req, res) {
  Comments.all(function(err, comments) {
    res.render('index', {comments: comments})
  })
})
*/

// Get all comments
exports.all = function(cb) {
  db.fetch({}, cb)
}

// Get all comments by a particular user
exports.allByUser = function(user, cb) {
  db.fetch({user: user}, cb)
}
