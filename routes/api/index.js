//Api Route handler
const express = require("express");
const apiRouter = express.Router();
const fetchImages = require("./fetchImages");
const fetchCryptocurrencies = require("./fetchCryptocurrencies");

apiRouter.get("/fetchImages", fetchImages);
apiRouter.get("/fetchCryptocurrencies", fetchCryptocurrencies);

module.exports = apiRouter;
