var app = angular.module("DerekApp", []);

app.controller('MainController', function(){

  var controller = this;
  this.slide = 1;

  this.slider = function() {
    return controller.slide +=1;
  };

});
