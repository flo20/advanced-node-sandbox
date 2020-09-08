"use strict";

const http = require("http");
const person = require("./person.json");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1"; //localhost


const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"application/json"})
    //res.end(JSON.stringify({a:1,b:"weewe"}))
    res.end(JSON.stringify(person))
})

server.listen(port, host, () =>
  console.log(`Server ${host} is listening on port ${port}`)
);