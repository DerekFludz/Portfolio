var router = require('express').Router();

var Project = require('../models/project.js');

router.get('/', function(req, res) {
  Project.find({}, function(err, data) {
    res.send(data);
  });
});

module.exports = router;
