const fetch = require("node-fetch");
const dotenv = require("dotenv"); // read from .env
dotenv.config();

const MY_ACCESS_KEY = process.env.MY_ACCESS_KEY;
const fetchImages = async (req, res) => {
  console.log("biri imajlari fetch etti");
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

module.exports = fetchImages;
