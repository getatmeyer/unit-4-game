var randomResult;
var win = 0; //hold the number of win input
var loss= 0; // hold the number of losses input
var counts= 0;
// var targetNumber = 40;
var targetNumber;

var targetResult;
// var score = [];
var previous = 0;
// $('numberWins').text(wins);
// $('numberLosses').text(losses);
resetCrystal();

$(document).on("click", "img", function () {
    currentScore += +$(this)[0].dataset.crystal
    $("#currentScore").html(currentScore);
    console.log(currentScore);
    
    if (currentScore == targetNumber) {
        win++;
        resetCrystal();
        alert("You guessed em' right!")
    } else if (currentScore > targetNumber) {
        loss++;
        resetCrystal();
        alert("Try again!")
    }
    });

function resetCrystal() {

    targetNumber = Math.floor(Math.random() * 120-19) + 19;

    $("#guessResults").html(targetNumber);
    console.log("target Number is " + targetNumber);

    currentScore = 0;

    $("#currentScore").html(currentScore);

    var random = [];

    for (var i = 0; i < 4; i++) {
        var numbers = Math.floor(Math.random() * 12) + 1;
        random.push(numbers);
    }
    console.log(random);
    
    $("#bluecrystal").attr("data-crystal", random[0]);
    $("#greencrystal").attr("data-crystal", random[1]);
    $("#redcrystal").attr("data-crystal", random [2]);
    $("#yellowcrystal").attr("data-crystal", random [3]);

}


// var resetStart = function() {

    // $("#crystals-image").empty();

    // randomResult = Math.floor(Math,random() * 120-19) + 19;

    // $("#result").html( 'Number Guessed: ' + randomResult);

    // for (var i = 0; i < 4; i++) {

        // var random = Math.floor(Math.random() * 13) + 1;

        
   
// }   
// $("#result").append(); 
// }

// }
    // set #finalscore == targetNumber
    // $("#finalscore").text(targetNumber);

    // reset crystal collector game
    

    // BLUE CRYSTAL CLICK
    // $("#bluecrystal").on("click", function() {  
    // an on-click event that responds to blue crystal image.
    // total = total + GeneratedNumbers [0];
    // clicked, blue crystal counts 1
    // counts += 1;

    // Clicked image, an alert message.
    // alert("Your new score is " + counts );

    // / if function section
    // if (counts === targetNumber) {

        // if numbers match targetNumber
        // alert("YOU WIN!");
    // }
        // else if function section
        // else if (counts >= targetNumber) {

        // if numbers goes over targetNumber
        // alert("YOU LOSE!");

    // }finalscore();
    // });


    // GREEN CRYSTAL
    // $("#greencrystal").on("click", function() {
     // / on-click event that responds to green crystal image.

    // Each time clicked, crystal counts
    // counts += 3;

    // Click crystal images, an alert message.
    // alert("Your new score is " + counts );

    // / if function section
    // if (counts === targetNumber) {

        // if numbers match targetNumber
        // alert("YOU WIN!");

    // }
        // else if (counts >= targetNumber) {

            // if numbers goes over targetNumber
            // alert("YOU LOSE!");

    // }finalscore();startReset();
    // });

    // $("#redcrystal").on("click", function() {
     // / on-click event that responds to red crystal image.


    // Each time clicked, crystal counts
    // counts += 8;
    // wins ++;

    // Click crystal images, an alert message.
    // alert("Your new score is " + counts );

    // if function section
    // if (counts === targetNumber) {

        // if numbers match targetNumber
        // alert("YOU WIN!");
    // }
        // else if function section
        // else if (counts >= targetNumber) {
            
            // if numbers goes over targetNumber
            // alert("YOU LOSE!");
            
// }finalscore();
// });

    // $("#yellowcrystal").on("click", function() {
     // / on-click event that responds to yellow crystal image.


        // Each time clicked, crystal counts
        // counts += 5;
    
        // Click crystal images, an alert message.
        // alert("Your new score is " + counts );
        
        // if function section
        // if (counts === targetNumber) {

            // if numbers match targetNumber
            // alert("YOU WIN!");
        // }
            // else if function section
        // else if (counts >= targetNumber) {

            // if numbers goes over targetNumber
            // alert("YOU LOSE!");
    // }finalscore();
    // });

    // function finalscore () { 
        // document.getElementById("finalscore").innerHTML = "" + counts;
    // }finalscore ();

    // function wins() {
        // document.getElementById("wins").innerHTML = "Wins : " + wins;
    // }wins ();
    
    // function startReset () {

    //     targetNumber >= counts;
    //     score = [];
   
    //    }startReset();