var counts= 0;

// Here we created an on-click event that responds to button clicks of the crystal image.
$("#crystalcontainer").on("click", function() {

    // Each time clicked, crystal counts
    counts += 1;

    // Click crystal images, an alert message.
    alert("You clicked a crystal!" + counts + "times");
});