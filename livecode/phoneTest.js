"use strict"

const peoples = require("./telephone.json");

for (let people of peoples) {
    for (let phone of people.phones) {
        if (people.type === "home") {
            console.log(`${people.firstname} ${people.lastname} ${phone.number}`);
        }
  
    
    }
    
}

// for (let people of peoples){
//     console.log(`${people.firstname} ${people.lastname}`);
// }

// for (let people of peoples) {
//     console.log(people.lastname);
//     const types = [];
//     for (let phone of people.phones) {
//         if (!types.includes(phone.type)) {
//             types.push(phone.type);
//         }
//     }
//     console.log(types.join("\t${types.join(\n\t)"));
// }


// console.log([1, 2, 3, 4, 5, 6, 7].join(","));

// "\n" this indents everything to the left

// "\t"  this 