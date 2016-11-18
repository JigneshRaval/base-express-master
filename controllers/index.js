/*var express = require('express')
  , router = express.Router()

router.use('/comments', require('./comments'))
router.use('/users', require('./users'))

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router
*/

// Taken from https://www.terlici.com/2014/08/25/best-practices-express-structure.html
//==========================================================================================
var express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment')

router.use('/comments', require('./comments'))
router.use('/users', require('./users'))

router.get('/', function(req, res) {
  Comments.all(function(err, comments) {
    res.render('index', {comments: comments})
  })
})

module.exports = router
