"use strict";

alert(`Welcome to the lunar research base
    status: abandoned
    AI assistant: Tyson`);

let charName = prompt(`Please enter your identification for access override`,
    `Traveller.`
);

const companion = prompt(`Agent ${charName} what companion will be accompanying you?`);

const power = prompt(`Please register your superpower in the system`);

const training = prompt(`How many years have you trained for your position agent?`);
const trainingYearsText = Number(training);
console.log(trainingYearsText, typeof trainingYearsText);

const powerLevel = trainingYearsText * 10;
console.log(powerLevel)

const fighter = confirm(`Does ${charName} like fighting monsters? click OK for Yes or Cancel for No.`);
console.log(fighter , typeof fighter);

alert(`Gathering magic for ${charName} ... almost ready!`);

alert(`======================================
    Name: ${charName}
    Pet: ${companion}
    Superpower: ${power}
    Power Level: ${powerLevel}
    Monster Fighter? ${fighter ? "Yes" : "No"}
    
    In the abandoned space station ${charName} used 
    ${power} to look for any clues
    while ${companion} helped.
    ======================================`)