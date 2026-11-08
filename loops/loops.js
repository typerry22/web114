//Tyson Perry 11/8/2026

"use strict";


let fragileEquip = 0;
let normalSup = 0;
let unknownCargo = 0;

for(let code = 0; code <= 20; code++){
    if (code % 5 === 0) {
        console.log(`crate ${code}: Handle with care!`);
        fragileEquip++;

    } else if ( code % 2 === 0){
        console.log(`crate ${code}: Load crate`);
        normalSup++

    } else {
        console.log(`crate ${code}: Inspect crate`);
        unknownCargo++;
    };
}
console.log('==============================')
console.log("Fragile crates " + fragileEquip);
console.log("Ready to load " + normalSup);
console.log("Crates to inspect " + unknownCargo);