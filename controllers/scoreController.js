var router = require('express').Router();

var Score = require('../models/score.js');

router.get('/', function(req, res) {
  Score.find({}, function(err, data) {
    res.send(data);
  });
});

// router.post('/:person/:clicks/:time', function(req, res) {
//   var person = req.params.person;
//   var clicks = req.params.clicks;
//   var time = req.params.time;
//   Score.create({name: person, clicks: clicks, time: time}, function(err, data) {
//     res.send(data);
//     console.log(data);
//   });
// });

module.exports = router;
