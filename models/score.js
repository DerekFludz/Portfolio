var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({

  name: { type: String, required: true },
  clicks: { type: Number, required: true },
  time: { type: Number, required: true }

});

var Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
