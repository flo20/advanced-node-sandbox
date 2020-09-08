"use strict";
//this pure nodejs
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/plain; charset=utf8" });
    //response.write("Hello"); this does not end the browser after running
    response.end("Hello world");
});

server.listen(port, host, () => console.log(`Server ${host} is listening on port ${port}`));