const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const MY_ACCESS_KEY_WEATHER = process.env.MY_ACCESS_KEY_WEATHER;

const fetchGeoPosition = async (req, res) => {
  console.log("I got a request!");
  console.log("body", req.body);
  const data = req.body;

  try {
    const response = await fetch(
      //By geographic coordinates
      `http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&units=imperial&appid=${MY_ACCESS_KEY_WEATHER}`
    );
    const weatherData = await response.json();
    res.send(weatherData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = fetchGeoPosition;
