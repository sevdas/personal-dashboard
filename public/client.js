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

if (window.location.href === "http://localhost:3000/") {
  fetchImages();
  fetchCryptocurrencies();
}

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
