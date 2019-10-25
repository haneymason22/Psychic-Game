var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessText = document.getElementById("userguess-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    for (var j =0; j < computerChoices.length; j ++) {
        if (userGuess === computerGuess) {
            wins ++;
            guessesLeft=9;
        } else {
            guessesLeft --;
        };

        if (guessesLeft=0) {
            losses ++;
            guessesLeft=9;
        };

       
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        userGuessText = "Your guesses so far: " + userGuess;


    };

    
  };