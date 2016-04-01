$(function(){

  // for (var i=0; i < projects.length; i++) {
  //   var $projectDiv = $('<div>');
  //   $puckDiv.addClass('indiv-project');
  //   $('.projects-wrapper').append($projectDiv);
  // };

  ////////// PUCK GAME LOGIC //////////
  var startPucks = function() {

    var randomNumber = function(x) {
  		return Math.random()*x;
  	}

  	var $pucks = [];

  	for (var i=0; i < 20; i++) {
  		var $puckDiv = $('<div>');
  		$puckDiv.addClass('puck');
  		$('#pucks-wrapper').append($puckDiv);
  		$pucks.push($puckDiv);
  	};

  	var $goldenPuck = $('.golden');
    $goldenPuck.css("visibility", "visible")
  	$pucks.push($goldenPuck);

  	animateStuff = function() {
  		for (var i=0; i < $pucks.length; i++) {
  			var animateLoop = $pucks[i].animate({
  				left: randomNumber($(window).width() - 75),
  				top: randomNumber($(window).height() - 125),
  			}, 1000, function() {
  				animateStuff()});
  		};
  	};

  	animateStuff();

  };

  $(document).on('click', '#start-pucks', function() {
    $('#start-pucks').remove();
    return startPucks();
  });
  ////////// END PUCK GAME LOGIC //////////

  ////////// SIMON GAME LOGIC //////////

  var $streak = 0;

  var $cpuMoves = [];
  var $playerMoves = [];



  // random computer move
  cpuMove = function() {
    return
  }

  ////////// END SIMON GAME LOGIC //////////



});
