const fetch = require("node-fetch");
const dotenv = require("dotenv"); // read from .env
dotenv.config();

const MY_ACCESS_KEY_IMAGES = process.env.MY_ACCESS_KEY_IMAGES;

const fetchImages = async (req, res) => {
  try {
    let url =
      "https://api.unsplash.com/photos/random?client_id=" +
      MY_ACCESS_KEY_IMAGES +
      "&orientation=landscape" +
      "&query=nature";
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    if (error) {
      const defaultUrl =
        "https://res.cloudinary.com/das6ciypl/image/upload/v1607034134/pexels-rachel-claire-4577419_wlpdih.jpg";
      const response = await fetch(defaultUrl);
      const data = await response.json();
      res.send(data);
    }
    res.status(500).send({ error });
  }
};

module.exports = fetchImages;
