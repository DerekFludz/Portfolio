/////////////////////////
// REQUIREMENTS
/////////////////////////

var express  = require('express'),
    app      = express(),
    logger   = require('morgan'),
    mongoose = require('mongoose'),
    db       = mongoose.connection,
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/portfolio',
    port     = process.env.PORT || 3000;

/////////////////////////
// MIDDLEWARE
/////////////////////////

app.use(express.static('public'));
app.use(logger('dev'));

/////////////////////////
// CONTROLLERS
/////////////////////////

// HOME PAGE
// app.get('/', function(req, res){
//   res.send('hi');
// });


/////////////////////////
// LISTEN
/////////////////////////

mongoose.connect(mongoUri);

db.once('open', function(){
  app.listen(port, function(){
    console.log('============================');
    console.log('Running on port ' + port);
    console.log('============================');
  });
});