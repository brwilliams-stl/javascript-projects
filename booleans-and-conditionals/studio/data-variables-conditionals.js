// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronoutMass = 80.7;
let crewMassKg = astronautCount * averageAstronoutMass;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -100;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 67;
let weatherStatus = "rainy";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log("Too many astronauts");
}

// add logic below to verify all astronauts are ready
if (astronautStatus != "ready") {
    preparedForLiftOff = false;
    console.log("Not all astronauts are ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false;
    console.log("Mass limit lxceeded");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if ((fuelTempCelsius < minimumFuelTemp) || (fuelTempCelsius > maximumFuelTemp)) {
    preparedForLiftOff = false;
    console.log("Fuel temperature outside of safe limits");
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel != 100) {
    preparedForLiftOff = false;
    console.log("Fuel tanks not full");
}

// add logic below to verify the weather status is clear
if (weatherStatus != "clear") {
    preparedForLiftOff = false;
    console.log("Weather not clear");
}

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff) {
    console.log("All systems ready. Initiating launch sequence.");
    console.log("-----------------------------------------------");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg, "kg");
    console.log("Fuel Mass:", fuelMassKg, "kg");
    console.log("Shuttle Mass:", shuttleMassKg, "kg");
    console.log("Total Mass:", totalMassKg, "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "°C");
    console.log("Weather Status:", weatherStatus);
    console.log("-----------------------------------------------");
    console.log("Godspeed.");
} else {
    console.log("Shuttle launch aborted. Check all conditions and systems.");
}