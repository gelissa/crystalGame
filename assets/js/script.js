// set my variables

// create a variable for the number to guess
// var numGuess = 145; 
    var numGuess = Math.floor(Math.random() * 120);
// create onclick for each incremental guess
$(".guessNum").text(numGuess);

$("#amethyst").attr("data-id", Math.floor(Math.random() * 12) +1)
$("#steven").attr("data-id", Math.floor(Math.random() * 12) +1)
$("#ruby").attr("data-id", Math.floor(Math.random() * 12) +1)
$("#sapphire").attr("data-id", Math.floor(Math.random() * 12) +1)

// create variable for the counter
var counter = 0;

$(".crystal").on("click", function() {
    var currentNum = $(this).data("id")
    console.log(currentNum)
    counter += currentNum;
    $(".userGuess").text(counter);
    if (counter === numGuess){
        $(".displayText").text("You won!");
    }else if (counter >= numGuess){
        $(".displayText").text("Oops, missed it");
    }
});





// // create onclick event for when each crystal gem is clicked
// $("#amethyst").on("click", function() {
//     // alert("amethyst was clicked");
//     counter += 20;
//     $(".userGuess").text(counter);
//     if (counter === numGuess){
//         $(".displayText").text("You won!");
//     }else if (counter >= numGuess){
//         $(".displayText").text("Oops, missed it");
//     }
//     // gameEnd();
// });
// $("#steven").on("click", function(){
//     // alert("steven was clicked");
//     counter += 100
//     $(".userGuess").text(counter);
//     if (counter === numGuess){
//         $(".displayText").text("You won!");
//     }else if (counter >= numGuess){
//         $(".displayText").text("Oops, missed it");
//     }
//     // gameEnd();
// });
// $("#ruby").on("click", function(){
//     // alert("ruby was clicked");
//     counter += 15
//     $(".userGuess").text(counter);
//     if (counter === numGuess){
//         $(".displayText").text("You won!");
//     }else if (counter >= numGuess){
//         $(".displayText").text("Oops, missed it");
//     }
//     // gameEnd();
// });
// $("#sapphire").on("click" , function(){
//     // alert("sapphire was clicked");
//     counter += 10
//     $(".userGuess").text(counter);
//     if (counter === numGuess){
//         $(".displayText").text("You won!");
//     }else if (counter >= numGuess){
//         $(".displayText").text("Oops, missed it");
//     }
//     // gameEnd();
// });
// make each crystal have a value

// if they reach the number, alert a win
// function gameEnd(){
// if (counter === numGuess) {
//     $(".displayText").text("You won!");
// }
// else if (counter >= numGuess){
//     $(".displayText").text("You lost");
// }
//  counter;
// };


// bonus: randomize the value after each click