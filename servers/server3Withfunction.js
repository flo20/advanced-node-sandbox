"use strict";
 
function createHtml() {
    let htmlString = `

     <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Person data</title>
    </head>
    <body>
    <h1>Person</h1>
    `;
    let partB = ` <h2>${person.firstname} ${person.lastname}</h2>)`;
    
    let theEndPart = `</body>
    </html>`;
    return htmlString+partB+theEndPart
    
}
   


