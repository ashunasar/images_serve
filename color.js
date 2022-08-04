// const { getColorFromURL } = require("color-thief-node");
// const chalk = require("chalk");
import chalk from "chalk";
import ColorThief from "colorthief";
// const ColorThief = require("colorthief");
// const path = require("path");
import path from "path";
// (async () => {
//   const dominantColor = await getColorFromURL("images/post.jpeg");
//   const [r, g, b] = dominantColor;
//   console.log("Dominant Color:", chalk.rgb(r, g, b)(`rgb(${r}, ${g}, ${b})`));
// })();

const img = path.resolve(process.cwd(), "images/post.jpeg");

ColorThief.getColor(img)
  .then((color) => {
    const [r, g, b] = color;
    console.log("Dominant Color:", chalk.rgb(r, g, b)(`rgb(${r}, ${g}, ${b})`));
  })
  .catch((err) => {
    console.log(err);
  });

//   Dominant Color: rgb(238, 221, 231)
// Dominant Color: rgb(225, 214, 232)
