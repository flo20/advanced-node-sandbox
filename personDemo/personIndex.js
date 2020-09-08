"use strict";

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const { get, getAll } = require("./persons.js");

const homePath = path.join(__dirname, "home.html");
//const { title } = require("process");

// console.log(get("firstname", "Jese"));
// console.log(get());
// console.log(getAll());

const server = http.createServer((req, res) => {
  const urldata = url.parse(req.url, true);
  const name = urldata.query.name;
  // const age = +urldata.query.age;
  const route = urldata.pathname;
  let result = [];

  if (route === "/") {
    fs.readFile(homePath, "utf8", (err, data) => {
      if (err) {
        res.setStatus = 404;
        res.end(err.message); // just for debugging
      } else {
        res.writeHead(200, {
          "Conte-Type": "text/html",
          "Content-Length": Buffer.byteLength(data,"UTF8"),
        });
        res.end(data);
      }
    });
  } else {
    if (route === "/persons") {
      result = getAll();
    } else if (route === "/person/firstname") {
      result = get("firstname", name);
    } else if (route === "/persons/lastname") {
      result = get("lastname", name);
    } else if (route === "/persons/age") {
      result = get("age", +name);
    } else {
      result = {
        message: "Key not found",
      };
    }
    // else if (route === "/persons/age") {
    //     result = get("age", age);
    // }
    res.writeHead(200, {
      // "Content-Type": "text/html; charset=utf8",
      "Content-Type": "application/json; charset=utf8",
      "Access-Control-Allow-Origin": "*",
    });
    //  res.end(createWebPage(result));
    res.end(JSON.stringify(result));
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening on port ${port}`)
);

//helper function

// function createWebPage(searchResult) {
//   let message = `
//     <!DOCTYPE html>
//     <html lang="en">
//         <head>
//         <meta charset="utf-8">
//             <title>Persons</title>
//             </head>
//         <body>
//             <h1>Search results</h1>`;
//   if (searchResult.length === 0) {
//     message += "<p>No persons found</p>";
//   } else {
//     message += `
//         <table>
//         <thead>
//         <tr>
//             <th>
//                 First name
//             </th>
//             <th>
//                 Last name
//             </th>
//             <th>
//                 Age
//             </th>

//         </tr>
//     </thead>
//     <tbody>`;
//     for (let person of searchResult) {
//       message += `<tr>
//             <td>${person.firstname}</td><td>${person.lastname}</td><td>${person.age}</td>
//             </tr>\n`;
//     }
//     message += `</tbody>
//         </table >
//         </body >
//         </html>`;
//   }
//   return message;
// }
