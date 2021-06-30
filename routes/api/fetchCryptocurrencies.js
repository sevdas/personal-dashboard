const fetch = require("node-fetch");

const fetchCryptocurrencies = async (req, res) => {
  let dogeCoinUrl = "https://api.coingecko.com/api/v3/coins/dogecoin";
  try {
    const response = await fetch(dogeCoinUrl);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = fetchCryptocurrencies;
