var counts= 0;
var targetNumber = 40;
var newhiddenValues = [4, 3, 12, 2 ]

$("#finalscore").text(targetNumber);

    // ON-CLICK EVENT SECTION

    // an on-click event that responds to blue crystal image.
    $("#bluecrystal").on("click", function() {

    // clicked, blue crystal counts 1
    counts += 1;

    // Clicked image, an alert message.
    alert("Your new score is " + counts );

    // / if function section
    if (counts === targetNumber) {

        // if numbers match targetNumber
        alert("YOU WIN!");
    }
        // else if function section
        else if (counts >= targetNumber) {

        // if numbers goes over targetNumber
        alert("YOU LOSE!");
    }
    });

    // / on-click event that responds to green crystal image.
    $("#greencrystal").on("click", function() {

    // Each time clicked, crystal counts
    counts += 3;

    // Click crystal images, an alert message.
    alert("Your new score is " + counts );

    // / if function section
    if (counts === targetNumber) {

        // if numbers match targetNumber
        alert("YOU WIN!");

    }
        // else if function section
        else if (counts >= targetNumber) {

            // if numbers goes over targetNumber
            alert("YOU LOSE!");

    }  
    });

    // / on-click event that responds to red crystal image.
    $("#redcrystal").on("click", function() {

    // Each time clicked, crystal counts
    counts += 8;

    // Click crystal images, an alert message.
    alert("Your new score is " + counts );

    // if function section
    if (counts === targetNumber) {

        // if numbers match targetNumber
        alert("YOU WIN!");
    }
        // else if function section
        else if (counts >= targetNumber) {

            // if numbers goes over targetNumber
            alert("YOU LOSE!");

}
});

    // / on-click event that responds to yellow crystal image.
    $("#yellowcrystal").on("click", function() {

        // Each time clicked, crystal counts
        counts += 5;
    
        // Click crystal images, an alert message.
        alert("Your new score is " + counts );
        
        // if function section
        if (counts === targetNumber) {

            // if numbers match targetNumber
            alert("YOU WIN!");
        }
            // else if function section
        else if (counts >= targetNumber) {

            // if numbers goes over targetNumber
            alert("YOU LOSE!");
    }
    });

    