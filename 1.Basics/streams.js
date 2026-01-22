const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8", // translates buffer to string immediately
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n"); // writes a separator
//   writeStream.write(chunk); // writes chunk to blog4.txt
// });

// piping - connects readStream to writeStream directly
// meaing: it does exactly the same thing as the longer commented out code.
readStream.pipe(writeStream);
