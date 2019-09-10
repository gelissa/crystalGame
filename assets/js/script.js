// set my variables

// create a variable for the number to guess
var numGuess = 145; 
// create onclick for each incremental guess
$("#number-to-guess").text(numGuess);

// create variable for the counter
var counter = 0;
// create onclick event for when each crystal gem
$("#amethyst").on("click", function() {
    alert("amethyst was clicked");
    $("#userGuess").text(counter);
    counter += 20;
});
$("#steven").on("click" , function(){
    counter += 100
    $("#userGuess").text(counter);
});
$("#ruby").on("click" , function(){
    counter += 15
    $("#userGuess").text(counter);
});
$("#sapphire").on("click" , function(){
    counter += 10
    $("#userGuess").text(counter);
});
// make each crystal have a value
// bonus: randomize the value after each click