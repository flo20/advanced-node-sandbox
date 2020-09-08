"use strict";

const person = {
  firstname: "Florence",
  lastname: "Anipa",
  phone: "04000000000",
};
console.log(person.firstname);
console.log(person.lastname);
console.log(person['lastname']); // comes in handy for http

let greetings = `My name is ${person.lastname},${person.firstname}.`;
console.log(greetings);