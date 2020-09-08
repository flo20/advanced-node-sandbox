"use strict";
const cars = require("./cars.json");

const http = require("http");

const port = process.env.PORT || 3006;
const host = process.env.HOST || "localhost";

function createHtml() {
  let htmlString = `

     <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Person data</title>
    </head>
    <body>
    <h1>Cars</h1>
    `;
let partB = "";
    for (let car of cars) {
        partB += ` <h2>${car.model} ${car.licence}</h2>)`;
    }
  

  let theEndPart = `</body>
    </html>`;
  return htmlString + partB + theEndPart;
}
