// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');

router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    res.json(comments);
  });
});

router.post('/', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json(req.body);
  });
});

module.exports = router;