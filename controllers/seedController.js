var router = require('express').Router();

var Project = require('../models/project.js');

// SEED DATA

// var newProject = [
//               {
//                 name: 'Connect Four',
//                 img: '',
//                 description: ''
//               },
//               {
//                 name: 'Flyers Blog',
//                 img: '',
//                 description: ''
//               },
//               {
//                 name: 'Urban Yoda',
//                 img: '',
//                 description: ''
//               },
//               {
//                 name: 'Run Tracker',
//                 img: '',
//                 description: ''
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
