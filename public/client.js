// Fetch images
const fetchImages = async () => {
  try {
    let urlImages = "/api/fetchImages";
    const response = await fetch(urlImages);
    const data = await response.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    //author
    const author = document.querySelector(".author");
    author.textContent = `By: ${data.user.name}`;
  } catch (err) {
    // Handle the error
    // Choose to use a default background image
    const url =
      "https://res.cloudinary.com/das6ciypl/image/upload/v1607034134/pexels-rachel-claire-4577419_wlpdih.jpg";
    document.body.style.backgroundImage = `url(${url})`;
    console.error("Something went wrong! 😭", err);
  }
};

// Fetch Cryptocurrencies
const fetchCryptocurrencies = async () => {
  let urlCrypto = "/api/fetchCryptocurrencies";
  try {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    // Add the name and icon of the cryptocurrency
    const cryptoDiv = document.getElementById("crypto__top");
    cryptoDiv.innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
     `;

    // Dogecoin prices.
    const currentPrice = `${data.market_data.current_price.gbp}`;
    const highestPrice = `${data.market_data.high_24h.gbp}`;
    const lowestPrice = `${data.market_data.low_24h.gbp}`;

    const cryptoCurrencyDiv = document.getElementById("crypto");
    cryptoCurrencyDiv.innerHTML += `
    <p>► £ ${currentPrice}</p>
    <p>▼ £ ${highestPrice}</p>
    <p>▲ £ ${lowestPrice}</p>
    `;
  } catch (err) {
    console.error(err);
  }
};

// Current time
const today = new Date();

const options = {
  hour: "2-digit",
  minute: "2-digit",
  month: "short",
  day: "2-digit",
  hour12: false,
  timeZoneName: "short",
  weekday: "short", //"long"
  // timeStyle: "medium",
};

function getCurrentTime() {
  const timeHeading = document.querySelector(".time");
  const date = new Date();
  // 'Europe/London'
  const time = date.toLocaleTimeString("en-uk", options);
  timeHeading.textContent = time;
}

//Update time in every other second
setInterval(getCurrentTime, 1000);

// Access the user's coordinates * by using the Geolocation Web API!
navigator.geolocation.getCurrentPosition(async (position) => {
  //Take geolocation data from the client and send it to the server, so it can be saved to the database.
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const data = { lat, lon };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  //receive response send by server
  try {
    const response = await fetch("/api/fetchGeoPosition", options);
    const jsonData = await response.json();
    console.log("json data", jsonData);

    //Display weather icon over the app
    const weatherDiv = document.getElementById("weather");
    const weatherData = jsonData.weather;
    const iconCode = weatherData.map((elem) => elem.icon);
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    //Display the temperature and the city
    const temperature = Math.round(jsonData.main.temp);
    const cityName = jsonData.name;
    weatherDiv.innerHTML = `
               <img src=${iconUrl} alt="weather" />
               <p class="weather-temp">${temperature}°</p>
               <p class="weather-city">${cityName}</p>
               `;
  } catch (err) {
    console.log(err);
  }
});

// Validate server
if (window.location.href === "http://localhost:3000/") {
  fetchImages();
  fetchCryptocurrencies();
}
