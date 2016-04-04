$(function(){

  ////////// PUCK GAME LOGIC //////////

  var startPucks = function() {

    var randomNumber = function(x) {
  		return Math.random()*x;
  	}

  	var $pucks = [];

    // dynamically generate pucks
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
      // loop through the puck array
  		for (var i=0; i < $pucks.length; i++) {
  			var animateLoop = $pucks[i].animate({
          // randomly animate page position, set speed, set max dimensions based on browser size
  				left: randomNumber($(window).width() - 75),
  				top: randomNumber($(window).height() - 125),
  			}, 5000, function() {
  				animateStuff()});
  		};
  	};

  	animateStuff();

    // storing clicks for high scores
    var counter = 0;
    $(document).on('click', function() {
      counter++;
    });

    // storing time spent on game for high scores
    var timer = 0;
    var timeRun = setInterval(function() {
      timer++;
    }, 1000);

    // stop timer once golden puck is clicked
    $(document).on('click', '.golden', function() {
      clearInterval(timeRun);
    });

    // display # of clicks and time spent on puck game
    $(document).on('click', '#check-score', function() {
      $clicks = $('<p>').html('Number of Clicks: ' + counter);
      $time = $('<p>').html('Time Spent: ' + timer + ' seconds');
      $('#puckscore-wrapper').append($clicks);
      $('#puckscore-wrapper').append($time);
    });

  }; // <-- end startPucks function

  // initialize puck game
  $(document).on('click', '#start-pucks', function() {
    $('#start-pucks').remove();
    return startPucks();
  });

  ////////// END PUCK GAME LOGIC //////////

  ////////// SIMON GAME LOGIC //////////

  var $streak = 0;
  var $round = 0;
  var $matched = null;

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

  // start next round
  var newRound = function() {
    $playerMoves = [];
    $matched = null;
    // boardOff();
    $round += 1;
    $('#round').html('Round: ' + $round);
    $cpuMoves.push(randomNum());
    animateBoard($cpuMoves);
    // boardOn();
  };

  $(document).on('click', '.simon-color', function(event) {
    var move = parseInt(event.target.id);
    $playerMoves.push(move);
    brightenSquare(event.target.id);
    checkMatch();
  });

  var checkMatch = function() {
    if ($cpuMoves.length == $playerMoves.length) {
      // boardOff();
      checkMoves($cpuMoves, $playerMoves);
    } else {
      return console.log('not equal length');
    };
  };

  var checkMoves = function(c, p) {
    for (var i = 0; i < $cpuMoves.length; i++) {
      if (c[i] != p[i]) {
        alert('Lost!')
      };
    };
    return newRound();
  };

  // animate computer move sequence
  var animateBoard = function(x) {
    var i = 0;
    var interval = setInterval(function() {
      brightenSquare(x[i]);
      i++;
      if (i >= $cpuMoves.length) {
        clearInterval(interval);
      };
    }, 1000);
  };

  // animate squares passing in div ID as x based on value in cpuMoves array
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

  // user clicks
  // var userClicked = function() {
  //
  // };

  // allow user interaction
  // var boardOn = function() {
  //   $('#simon-wrapper').on('click', $('.simon-color'), function(x) {
  //     userClicked(x);
  //   });
  // };

  // disable user interaction
  // var boardOff = function() {
  //   $('#simon-wrapper').off('click', $('.simon-color'));
  // };

  // initiate simon game
  $(document).on('click', '#start-simon', function() {
    $('#start-simon').remove();
    return startSimon();
  });

  // player move

  // check for match with move array

  // restart round

  // on 10 stop and proceed to next page



  ////////// END SIMON GAME LOGIC //////////

  ////////// PORTFOLIO LOGIC //////////

  // for (var i=0; i < projects.length; i++) {
  //   var $projectDiv = $('<div>');
  //   $puckDiv.addClass('indiv-project');
  //   $('.projects-wrapper').append($projectDiv);
  // };

});
