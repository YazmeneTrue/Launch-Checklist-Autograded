// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = 
    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number"
    }
    return "Is a Number"
    
 }
  let fuelNum = 0;
  let cargoNum = 0;
  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotElement = document.getElementById("pilotStatus");
    const copilotElement = document.getElementById("copilotStatus");
    const fuelElement = document.getElementById("fuelStatus");
    const cargoElement = document.getElementById("cargoStatus");
    const faultyElement = document.getElementById("faultyItems");
    const launchElement = document.getElementById("launchStatus");

    const pilotResult = validateInput(pilot);
    const copilotResult = validateInput(copilot);
    const fuelLevelResult = validateInput(fuelLevel);
    const cargoLevelResult = validateInput(cargoLevel);

    const fuelNum = Number(fuelLevel);
    const cargoNum = Number(cargoLevel);

    // Check if any input field is empty
    if (pilotResult === "Empty" || copilotResult === "Empty" || fuelLevelResult === "Empty" || cargoLevelResult === "Empty") {
        alert("All fields are required");
        return;
    }

    // Update pilot and copilot statuses
    pilotElement.textContent = `Pilot ${pilot} is ready for launch`;
    copilotElement.textContent = `Co-pilot ${copilot} is ready for launch`;

    // Check if fuel level is too low
    if (fuelNum < 10000) {
        faultyElement.style.visibility = "visible";
        fuelElement.textContent = `Fuel level too low for launch`;
        launchElement.textContent = `Shuttle Not Ready for Launch`;
        launchElement.style.color = "red";
        list.style.visibility = "visible";
    } else {
        fuelElement.textContent = `Fuel level high enough for launch`;
    }

    // Check if cargo level is too heavy
    if (cargoNum > 10000) {
        faultyElement.style.visibility = "visible";
        cargoElement.style.visibility = "visible";
        cargoElement.textContent = `Cargo mass too heavy for launch`;
        launchElement.style.color = "red";
        launchElement.textContent = `Shuttle Not Ready for Launch`;
        list.style.visibility = "visible";
    } else {
        cargoElement.textContent = `Cargo mass low enough for launch`;
    }

    // Check if both fuel level and cargo level are within limits
    if (fuelNum >= 10000 && cargoNum <= 10000) {
        faultyElement.style.visibility = "hidden";
        list.style.visibility = "visible";
        launchElement.style.color = "green";
        launchElement.textContent = `Shuttle is Ready for Launch`;
    }
}



 
 async function myFetch() {
     let planetsReturned = {};
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json())
     .catch(error => console.log(error));
      
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;