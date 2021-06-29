const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routers/api");

app.use(express.static("public"));

//Option1
// app.use("/api", apiRouter);
//Option1Ends

//Option2
const fetch = require("node-fetch");
const dotenv = require("dotenv"); // read from .env
dotenv.config();

const MY_ACCESS_KEY = process.env.MY_ACCESS_KEY;
if (!MY_ACCESS_KEY) throw new Error("MY_ACCESS_KEY is not defined");

const fetchImages = async (req, res) => {
  try {
    let url =
      "https://api.unsplash.com/photos/random?client_id=" +
      MY_ACCESS_KEY +
      "&orientation=landscape" +
      "&query=nature";
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

app.get("/api/fetchImages", fetchImages);
//Option2 ends

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.listen(3000);
