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
    console.log("Something went wrong! 😭", err);
  }
};

const fetchCryptocurrencies = async () => {
  let urlCrypto = "/api/fetchCryptocurrencies";
  try {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    console.log(data.image.large);
    const dogeImg = document.querySelector(".doge-img");
    dogeImg.src = `${data.image.thumb}`;
  } catch (err) {
    console.log(err);
  }
};

if (window.location.href === "http://localhost:3000/") {
  fetchImages();
  fetchCryptocurrencies();
}
