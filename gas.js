//Tyson Perry 11/15/2026

"use strict";

function calculateGasAverage() {
    let name = prompt("Please enter your name:");
    
    while (name !== null) {
        name = name.trim();

        if (name === "") {
            name = prompt("Name cannot be empty. Please enter your name again:");
        } 
        else {
            break;
        }
    }
    
    if (name == undefined) {
        console.log("You have cancelled name prompt.");
        return;
    }
console.log(`Welcome, ${name}!`);

    let count = 0;
    let total = 0;
    let average = 0;
    
    let input = prompt("Enter the first gas amount (or enter -1 to finish):");

    while (input !== null) {
        let gasAmount = Number(input);

        if (gasAmount === -1) {
            break;
        }

        if (isNaN(gasAmount) || input.trim() === "") {
            input = prompt("Invalid input. Please enter a valid number for the gas amount (or -1 to finish):");
        } 
        else {
            total += gasAmount;
            count++;
            
            input = prompt("Enter next gas amount (or -1 to finish):");
        }
    }

    if (count > 0) {
        average = total / count;
    } 
    else {
        average = 0;
    }

    console.log(`Total Valid Entries: ${count}`);
    console.log(`Total Sum: ${total}`);
    console.log(`Average Gas Amount: ${average}`);

    return average;
}

calculateGasAverage();