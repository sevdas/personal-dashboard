const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const apiRouter = require("./routers/api");
const fetchImages = require("./routers/api/fetchImages");
const fetchCryptocurrencies = require("./routers/api/fetchCryptocurrencies");

//Handle routing
app.use(express.static("public"));

//Option 1
//Middleware
// app.use("/api", apiRouter);

app.get("/api/fetchImages", fetchImages);
app.get("/api/fetchCryptocurrencies", fetchCryptocurrencies);

//End points
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// app.listen(port);
// console.log("Server started at http://localhost:" + port);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
