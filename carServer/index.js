"use strict";

const http = require("http");
//const path =require("path")

const handleGetRequests = require("./library/routeHandlerGet")(__dirname);
// const handleGetRequests = require(path.join(
//   __dirname,
//   "library",
//   "routeHandlerGet"
// ));
const handlePostRequests = require("./library/routeHandlerPost")(__dirname);
const { redirectError } = require("./library/handler");

const port = process.env.PORT || 3000;
const host = process.env.host || "localhost";

// console.log(process.env.OS);
// console.log(process.env);
// console.log(process);

//console.log(Object.keys(process.env));

const server = http.createServer((req, res) => {
  if (req.method.toUpperCase() === "GET") {
    handleGetRequests(req, res);
  } else if (req.method.toUpperCase() === "POST") {
    handlePostRequests(req, res);
  } else {
    redirectError(res, "Resource not in use");
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening on port ${port}`)
);
