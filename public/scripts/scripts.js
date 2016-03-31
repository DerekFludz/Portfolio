$(function(){

  // for (var i=0; i < projects.length; i++) {
  //   var $projectDiv = $('<div>');
  //   $puckDiv.addClass('indiv-project');
  //   $('.projects-wrapper').append($projectDiv);
  // };

  var startPucks = function() {

    var randomNumber = function() {
  		return Math.random()*1000;
  	}

  	var $pucks = [];

  	for (var i=0; i < 20; i++) {
  		var $puckDiv = $('<div>');
  		$puckDiv.addClass('puck');
  		$('#pucks-wrapper').append($puckDiv);
  		$pucks.push($puckDiv);
  	};

  	var $goldenPuck = $('<div>');
  	$goldenPuck.addClass('golden');
  	$('#pucks-wrapper').append($goldenPuck);
  	$pucks.push($goldenPuck);

  	animateStuff = function() {
  		for (var i=0; i < $pucks.length; i++) {
  			var animateLoop = $pucks[i].animate({
  				left: randomNumber(),
  				top: randomNumber(),
  			}, 500, function() {
  				animateStuff()});
  		};
  	};

  	animateStuff();

  };

  $(document).on('click', '#start-pucks', function() {
    return startPucks();
  });

});
