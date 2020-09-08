"use strict";

const { get } = require("./carsStorage");

console.log(get("model","Hoppa"));
console.log(get("licence", "ABC-1"));


for (let car of get("model", "Kaara")) {
    console.log(`model:${car.model}:${car.licence}`);
}