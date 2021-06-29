//Api Route handler
const express = require("express");
const apiRouter = express.Router();
const fetchImages = require("./fetchImages");

apiRouter.get("/fetchImages", fetchImages);

module.exports = apiRouter;
