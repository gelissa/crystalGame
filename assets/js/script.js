// set my variables

// create a variable for the number to guess
var numGuess = 145; 
// create onclick for each incremental guess
$(".guessNum").text(numGuess);

// create variable for the counter
var counter = 0;
// create onclick event for when each crystal gem is clicked
$("#amethyst").on("click", function() {
    // alert("amethyst was clicked");
    amCounter = counter += 20;
    $(".userGuess").text(amCounter);
});
$("#steven").on("click", function(){
    // alert("steven was clicked");
    counter += 100
    $(".userGuess").text(counter);
});
$("#ruby").on("click", function(){
    // alert("ruby was clicked");
    counter += 15
    $(".userGuess").text(counter);
});
$("#sapphire").on("click" , function(){
    // alert("sapphire was clicked");
    counter += 10
    $(".userGuess").text(counter);
});
// make each crystal have a value

// if they reach the number, alert a win
function gameEnd(){
if (counter === numGuess) {
    $(".displayText").text("You won!")
}
else if (counter >= numGuess){
    $(".displayText").text("You lost")
}
};

gameEnd();
// bonus: randomize the value after each click