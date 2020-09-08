"use strict";

const cars = require("./cars.json");

module.exports = (key, value) => {
    const found = [];
    //let found = []; version 2

    if (key && value) {
      const valueUpper = value.toUpperCase();
      for (let car of cars) {
        if (car[key].toUpperCase() === valueUpper) {
        }
      }
    } else {
        found.push(...cars);
        //found= cars;
    }
    return found;
}