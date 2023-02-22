const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dirNameToPerformAction = "cover_images";
const directoryPath = path.join(__dirname, dirNameToPerformAction);
fs.readdir(directoryPath, function (err, subFolders) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  subFolders.forEach(function (folder) {
    fs.readdir(directoryPath + "/" + folder, function (err, files) {
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
      if (folder != ".DS_Store") {
        files.forEach(function (file) {
          console.log(dirNameToPerformAction + "/" + folder + "/" + file);

          if (!fs.existsSync("newFiles/" + folder)) {
            fs.mkdirSync("newFiles/" + folder);
          }

          sharp(dirNameToPerformAction + "/" + folder + "/" + file)
            .jpeg()
            .toFile("newFiles/" + folder + "/" + file.split(".")[0] + ".jpg")
            .then((data) => {
              //   console.log(data);
              //   fs.unlinkSync("something_test/" + file);
            })
            .catch((err) => {
              console.log(dirNameToPerformAction + "/" + folder + "/" + file);
              console.log(err);
            });
        });

        //    files.forEach(function (file) {
        //       console.log("sliding_images/" + folder + "/" + file);
        //     });
      }
    });
  });
});
