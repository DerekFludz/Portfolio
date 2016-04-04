var router = require('express').Router();

var Project = require('../models/project.js');

// SEED DATA

// var newProject = [
//               {
//                 name: 'Connect Four',
//                 img: 'images/connect4.jpeg',
//                 description: 'Static game developed using Javascript and jQuery. Responsive design implemented with HTML5 and CSS3.'
//               },
//               {
//                 name: 'Flyers Blog',
//                 img: 'images/blogpic.jpeg',
//                 description: 'Express application with three model relationship and user authentication implemented with Passport.js.'
//               },
//               {
//                 name: 'Urban Yoda',
//                 img: 'images/urbyoda.jpeg',
//                 description: 'Single page MEAN stack team project with server side API requests and user curated quote database.'
//               }
// ];
//
// router.get('/', function(req, res) {
//   Project.create(newProject, function(err) {
//     if (err) {
//       console.log(err);
//       res.send('Error seeding database');
//     } else {
//       res.redirect('/');
//     }
//   });
// });

module.exports = router;
