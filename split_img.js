// const fs = require("fs");
// const { imageToChunks } = require("split-images");

// (async () => {
//   try {
//     const chunckSize = 425;
//     const chuncks = await imageToChunks("images/highlight1.jpeg", chunckSize);
//     console.log("Number of chunks", chuncks.length);

//     let i = 0;
//     chuncks.forEach((c) => {
//       i++;
//       fs.writeFileSync(`chunks/slice_${i}.png`, c);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// })();

// Include gm library
var gm = require("gm");

// Import the image
gm("images/highlight1.jpeg")
  // Invoke crop function
  .crop(50, 50, 12, 6, true)

  // Process and Write the image
  .write("chunks/highlight1.jpeg", function (err) {
    if (!err) console.log("done");
  });
