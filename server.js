const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const apiRouter = require("./routes/api");
const fetchImages = require("./routes/api/fetchImages");
const fetchCryptocurrencies = require("./routes/api/fetchCryptocurrencies");
const fetchWeather = require("./routes/api/fetchWeather");

//Handle routing
app.use(express.static("public"));

// Read incoming data as json
app.use(express.json({ limit: "1mb" }));
//Option 1
//Middleware
// app.use("/api", apiRouter);

//End points
app.get("/api/fetchImages", fetchImages);
app.get("/api/fetchCryptocurrencies", fetchCryptocurrencies);
app.post("/api/fetchWeather", fetchWeather);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
