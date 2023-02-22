const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "something_test");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    console.log(file);
    sharp("something_test/" + file)
      .jpeg()
      .toFile("newFiles/" + file.split(".")[0] + ".jpg")
      .then((data) => {
        fs.unlinkSync("something_test/" + file);
      })
      .catch((err) => {});
  });
});
