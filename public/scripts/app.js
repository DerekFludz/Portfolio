var app = angular.module("DerekApp", []);

app.controller('MainController', ['$http', function($http){

  var controller = this;
  this.projects = null;
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

  // Portfolio Logic

  $http({
    url: ('/projects'),
    method: 'GET'
  }).then(
    function(response) {
      controller.projects = response.data;
    },
    function(err) {
      console.log(err);
    }
  );

}]);
