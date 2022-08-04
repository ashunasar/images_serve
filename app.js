const express = require("express");
const app = express();
const path = require("path");

const homeRoute = require("./routes/home.route");

app.use("/image", express.static(path.join(__dirname, "./images")));
app.use("/home", homeRoute);
app.get("/", (req, res) => {
  res.send("hello world");
});
//
// 192.168.0.101
app.listen("8000", "192.168.29.149", () => {
  console.log("🚀 server started on 8000");
});
