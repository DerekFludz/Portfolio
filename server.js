/////////////////////////
// REQUIREMENTS
/////////////////////////

var express  = require('express'),
    app      = express(),
    logger   = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db       = mongoose.connection,
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/portfolio',
    port     = process.env.PORT || 3000;

/////////////////////////
// MIDDLEWARE
/////////////////////////

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(logger('dev'));

/////////////////////////
// CONTROLLERS
/////////////////////////

// HOME PAGE
// app.get('/', function(req, res){
//   res.send('hi');
// });

// SEED CONTROLLER
var seedController = require('./controllers/seedController.js');
app.use('/seed', seedController);

var projectsController = require('./controllers/projectsController.js');
app.use('/projects', projectsController);

var scoreController = require('./controllers/scoreController.js');
app.use('/scores', scoreController);


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
