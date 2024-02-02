// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  return Math.round(radius * 2 * Math.PI);
}

// Code your missionDuration function here:
function missionDuration (numOrbits, orbitalRadius = 2000, orbitalVelocity = 2800) {
  let time = numOrbits * (orbitCircumference(orbitalRadius) / orbitalVelocity);
  return Math.round(time * 100) / 100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitalRadius, orbitalVelocity) {
  let duration = missionDuration(3, orbitalRadius, orbitalVelocity);
  let expendedOxygen = candidate.o2Used(duration);
  expendedOxygen = Math.round(expendedOxygen * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${expendedOxygen}kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };

let crew = [candidateA,candidateC,candidateE];

// console.log(`The mission will travel ${orbitCircumference(2000)}km around the planet, and it will take ${missionDuration(5)} hours to complete.`);
console.log(oxygenExpended(selectRandomEntry(crew), 2000, 2800));