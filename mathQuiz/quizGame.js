"use strict";

// Tyson Perry 10/25/2026

/* PLANNING / PSEUDOCODE*/

let quizScore = 0;
// Question 1
const firstAdd = prompt(`Please answer 5 + 3`);
let firstAddNum = Number(firstAdd);
if (firstAddNum === 8) {
    quizScore++;
    alert(`Correct!`);
    alert(`Your score is ${quizScore}`)
}
else {
    alert('Better luck next time!');
}

//Question 2
const sub = prompt(`Please solve 10 - 4`);
let subNum = Number(sub);
if (subNum === 6) {
    quizScore++
    alert(`Way to go!`);
    alert(`Your score is ${quizScore}`)
}
else {
    alert(`Wrong!`);
}

//Question 3
const multi = prompt(`What is 4 * 3?`);
let multiNum = Number(multi)
if (multiNum === 12) {
    quizScore++
    alert(`Good job!`);
    alert(`Your score is ${quizScore}`);
}
else {
    alert(`Incorrect`);
}

//Question 4
const divide = prompt(`Please solve 20 / 5`);
let divideNum = Number(divide);
if (divideNum === 4) {
    quizScore++
    alert(`That's right!`);
    alert(`Your score is ${quizScore}`);
}
else {
    alert(`Try again`);
}

//Question 5
const age = prompt(`How old am I?`);
let ageNum = Number(age);
if (ageNum === 36) {
    quizScore++
    alert(`Thats right friend!`);
    alert(`Your score is ${quizScore}`);
}
else {
    alert(`That's wrong`);
}

// Calculate percentage using math
let q = quizScore / 5;
let perc = q * 100;
if (perc >= 80) {
    alert(`${perc}% You pass!`)
}
else if ( perc == 60) {
    console.log(`${perc}% Close but no cigar!`);
}
else {
    alert(`${perc}% You failed.`);
}