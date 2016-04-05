var app = angular.module("DerekApp", []);

app.controller('MainController', ['$http', '$scope', function($http, $scope){

  var controller = this;
  this.projects = null;
  this.scores = null;
  this.clicks = null;
  this.time = null;
  this.slide = 0;

  // Page Transitions

  this.slide1 = function() {
    return controller.slide = 1;
  };

  this.slide2 = function() {
    return controller.slide = 2;
  };

  this.slide3 = function() {
    return controller.slide = 3;
  };

  this.slide4 = function() {
    return controller.slide = 4;
  };

  // Puck Leaderboard Future Implementation

  // $http({
  //   method: 'GET',
  //   url: '/scores'
  // }).then(
  //   function(response) {
  //     controller.scores = response.data
  //   },
  //   function(err) {
  //     console.log(err);
  //   }
  // );

  // this.saveScore = function() {
  //   var name = controller.name;
  //   console.log(name);
  //   var clicks = controller.clicks;
  //   console.log(clicks);
  //   var time = controller.time;
  //   console.log(time);
  //   $http({
  //     method: 'POST',
  //     url: '/scores/' + name + '/' + clicks + '/' + time
  //     // headers: {'Content-Type': 'undefined'}
  //   }).then(
  //     function(response) {
  //       console.log(response);
  //     }, function(err) {
  //       console.log(err);
  //     }
  //   );
  // };

  // Portfolio Logic

  $http({
    method: 'GET',
    url: '/projects'
  }).then(
    function(response) {
      controller.projects = response.data;
    },
    function(err) {
      console.log(err);
    }
  );

}]);
