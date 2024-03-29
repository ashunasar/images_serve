const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

const homeRoute = require("./routes/home.route");

app.use("/image", express.static(path.join(__dirname, "./images")));
app.use("/home", homeRoute);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/convertToJpg", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("🚀 server started on " + port);
});

// "chalk": "^5.0.1",
// "colorthief": "^2.3.2",
// "express": "^4.18.1",
// "gm": "^1.23.1",
// "split-images": "^1.0
