window.addEventListener("load", function() {

    let listedPlanets=[];
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
        event.preventDefault(); // Prevent default form submission
        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document,listedPlanets, pilot, copilot, fuelLevel, cargoLevel);
    });
});




 