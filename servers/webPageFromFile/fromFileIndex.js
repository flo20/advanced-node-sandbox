"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3006;
const host = process.env.HOST || "localhost";

const homeFilePath = path.join(__dirname, "home.html");

const server = http.createServer((req, res) => {
  fs.readFile(homeFilePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(err.message);
    } else {
      res.writeHead(200, {
        "Content-Tpe": "text/html",
        "Content-Length": Buffer.byteLength(data, "utf-8"),
      });
      res.end(data);
    }
  });
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening on port ${port}`)
);