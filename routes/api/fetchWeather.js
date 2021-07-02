const fetch = require("node-fetch");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

const MY_ACCESS_KEY_WEATHER = process.env.MY_ACCESS_KEY_WEATHER;

// const fetchWeather = async (req, res) => {
//   try {
//     const response = await fetch(
//       "api.openweathermap.org/data/2.5/weather?q=london&appid=" +
//         MY_ACCESS_KEY_WEATHER
//     );
//     const data = response.json();
//     res.send(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// module.exports = fetchWeather;

const fetchWeather = (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  res
    .json({
      status: "success",
      latitude: data.lat,
      longitude: data.lon,
    })
    .send();
};

module.exports = fetchWeather;
