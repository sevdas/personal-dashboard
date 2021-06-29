const fetchImages = async () => {
  try {
    let url = "/api/fetchImages";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    //author
    const author = document.querySelector(".author");
    console.log(author);
    author.textContent = `${data.user.name}`;
  } catch (err) {
    console.log("Something went wrong! 😭", err);
    // This is where I can handle the error
    // Choose to use a default background image
  }
};
if (window.location.href === "http://localhost:3000/") {
  fetchImages();
}
