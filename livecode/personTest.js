"use strict";

const person = require("./person.json");


console.log(person.firstname);
console.log(person.lastname);
console.log(person.phone[1]); //you can also console.log(person["phones"][1])
console.log("#######");
//best structure for tables/much easier and you dont have to go out of the array and can be done with for loop
//this is the preferred way
for (let phone of person.phone) {
    console.log(phone);
}

//for loop
for (let i = 0; i < person.phone.length;i++){
    console.log(i,":",person.phones[i]);
}

