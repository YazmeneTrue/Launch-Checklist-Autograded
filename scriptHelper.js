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
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotResult = validateInput(pilot);
    const copilotResult = validateInput(copilot);
    const fuelLevelResult = validateInput(fuelLevel);
    const cargoLevelResult = validateInput(cargoLevel);

    if(pilotResult ===""|| copilotResult ===""|| fuelLevelResult ===""|| cargoLevelResult ===""){
        alert("All fields are required");
    }

     document.getElementById("pilotStatus").innerHTML =`Pilot ${pilot} Ready`;
     document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} Ready`;
     if(fuelLevel < 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Not enough fuel for the journey`;
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
        document.getElementById("launchStatus").style.color = "red";
        }else{
            document.getElementById("fuelStatus").innerHTML = `Enough fuel for journey`
        }
     if(cargoLevel > 10000){
        document.getElementById("cargoStatus").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
     }else {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        }
     if(cargoLevel > 10000 && fuelLevel > 10000){
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = `Shuttle ready for launch`;
     }
    
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
         });
 
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