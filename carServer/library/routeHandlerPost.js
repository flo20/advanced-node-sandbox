//post handler

"use strict";

const path = require("path");
const url = require("url");

const {
  read,
  send,
  sendJson,
  getPostData,
  redirectError,
} = require("./handler");

const carstorage = require("../carstorage/carstorage");
module.exports = (baseDir) => {
  const get = require(path.join(baseDir, "carstorage", "carstorage.js"));
  const config = require(path.join(baseDir, "config.json"));
  const formPath = path.join(baseDir, config.WEBPAGES, "form.html");

  return async (req, res) => {
    const route = decodeURIComponent(url.parse(req.url).pathname);
    try {
      if (route === "/jsonencoded") {
        const result = await getPostData(req, "application/json");
        const car = await get("licence", result.licence);
        sendJson(res, car);
      } else if (route === "/urlencoded") {
        const result = await getPostData(
          req,
          "application/x-www-form-urlencoded"
        );
        const car = await get("licence", result.licence);
        sendJson(res, car);
      } else if (route === "") {
        const resultData = await getPostData(
          req,
          "application/x-www-form-urlencoded"
        );
        if (!resultData.licence) {
          redirectError(res, "License missing");
        } else {
          const car = await get("licence", resultData.licence);
          const resultPage = await read(formPath);
          if (car.length === 0) {
            resultPage.fileData = resultPage.fileData.replace("**MODEL**", "");
            resultPage.fileData = resultPage.fileData.replace(
              "**LICENCE**",
              ""
            );
          } else {
            resultPage.fileData = resultPage.fileData.replace(
              "**MODEL**",
              car[0].model
            );
            resultPage.fileData = resultPage.fileData.replace(
              "**LICENCE**",
              car[0].licence
            );
          }
          send(res, resultPage);
        }
      } else {
        redirectError(res, "Resorce not found");
      }
    } catch (err) {
      redirectError(res, err.message);
    }
  };
};
