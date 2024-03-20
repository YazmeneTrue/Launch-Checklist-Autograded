// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });
        // Any additional logic you want to add
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event){
            event.preventDefault();
            validateInput(document.getElementById("pilot").value);
            validateInput(document.getElementById("copilot").value);
            validateInput(document.getElementById("fuelLevel").value);
            validateInput(document.getElementById("cargoLevel").value);
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);


        })
    
 });



 