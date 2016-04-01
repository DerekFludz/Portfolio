var app = angular.module("DerekApp", []);

app.controller('MainController', function(){

  var controller = this;
  this.slide = 0;

  this.slide1 = function() {
    return controller.slide = 1;
  }

  this.slide2 = function() {
    return controller.slide = 2;
  }

  this.slide3 = function() {
    return controller.slide = 3;
  }

  this.slide4 = function() {
    return controller.slide = 4;
  }

  this.slider = function() {
    return controller.slide +=1;
  };

});
