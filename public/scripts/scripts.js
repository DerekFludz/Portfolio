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
  var $round = 0;

  var $cpuMoves = [];
  var $playerMoves = [];

  var randomNum = function() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  };

  var startSimon = function() {
    $cpuMoves = [];
    $playerMoves = [];
    $round = 0;
    $streak = 0;
    newRound();
  };

  var newRound = function() {
    $round += 1;
    $cpuMoves.push(randomNum());
    animateBoard($cpuMoves);
  };

  var animateBoard = function(x) {
    var i = 0;
    var interval = setInterval(function() {
      brightenSquare(x[i]);
      i++;
      if (i >= $cpuMoves.length) {
        clearInterval(interval);
        // boardOn();
        newRound();
      };
    }, 1000);
  };

  // animate squares
  var brightenSquare = function(x) {
    if (x == 1) {
      $('#1').addClass('lit');
      setTimeout(function(){
        $('#1').removeClass('lit');
      }, 200);
    } else if (x == 2) {
      $('#2').addClass('lit');
      setTimeout(function(){
        $('#2').removeClass('lit');
      }, 200);
    } else if (x == 3) {
      $('#3').addClass('lit');
      setTimeout(function(){
        $('#3').removeClass('lit');
      }, 200);
    } else if (x == 4) {
      $('#4').addClass('lit');
      setTimeout(function(){
        $('#4').removeClass('lit');
      }, 200);
    }
  };

  // allow user interaction
  // var boardOn = function() {
  //
  // }

  // disable user interaction
  // var boardOff = function() {
  //
  // }

  $(document).on('click', '#start-simon', function() {
    $('#start-simon').remove();
    return startSimon();
  });

  // random computer move

  // pushed into move array

  // player move

  // check for match with move array

  // restart round

  // on 10 stop and proceed to next page


  ////////// END SIMON GAME LOGIC //////////



});
