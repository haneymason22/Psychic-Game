var computerChoices = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var guessCounter = 9;
    for (var j =0; j < computerChoices.length; j ++;) {
        if (userGuess === computerGuess) {
            wins ++;
        }; 
    };
};