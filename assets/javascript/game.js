$(document).ready(function () {
  var wins = 0;
  var losses = 0;
  var targetedScore = 0;
  var yourScore = 0;
  var crystals = {
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0
  };

  function getRandomIntInclusive(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function start() {
    targetedScore = getRandomIntInclusive(19, 120);
    yourScore = 0;
    crystals = {
      red: getRandomIntInclusive(1, 12),
      blue: getRandomIntInclusive(1, 12),
      yellow: getRandomIntInclusive(1, 12),
      green: getRandomIntInclusive(1, 12),
    }
    $("#target-score").text(targetedScore);
  }
  start();
  console.log(crystals);
  
  $("#your-score").text(yourScore);
  

  $(".crystal-class").on("click", function () {
    // console.log(`in crystal class click`);
    
    yourScore = yourScore + crystals[$(this).attr("id")];

    $("#your-score").text(yourScore);
    // console.log("line 43 your score: ", yourScore);
    
    if (yourScore === targetedScore) {
      // console.log("in if");
      wins++;
      $("#your-wins").text(wins);
      // reset
      start();
  
      
    } else if (yourScore < targetedScore) {
      // console.log(`in else if`);
      
      return yourScore;
    } else {
      // console.log("in else");    
      losses++;
      start();
      $("#your-losses").text(losses);  
    }
  })
});

/*

When the page loads start the game

start game:
-set targetScore to a random number between 19 and 120
-set yourScore to 0
-set each crystal to a random number between 1 and 12
-update UI?

When the user clicks on a crystal:

-the value of the crystal is added to yourScore

-compare the updated yourScore to targetedScore:
  -if targetedScore > yourScore:
    -continue game
  -else if targetedScore = yourScore:
    -players wins:
      -increase wins by 1
      -restart/start game

  -else (yourScore > targetedScore):
    -player loses:
      -increase losses by 1
      -restart/start game
*/

