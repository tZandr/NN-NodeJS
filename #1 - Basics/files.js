const fs = require("fs");

// read files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    // logs errors if there is an error
    console.log(err);
  }
  console.log(data.toString()); //stringifies the buffer
});

console.log("last line"); //Comes first as readFile is async

// writing files(route, text(overwrites), async function)
fs.writeFile("./docs/blog1.txt", "hello, world", () => {
  console.log("File was written.");
});

fs.writeFile("./docs/blog2.txt", "hello, again", () => {
  console.log("File was written.");
});

// directories
if (!fs.existsSync("./assets")) {
  // Runs if folder doesn't exist.
  fs.mkdir("./assets", (error) => {
    if (error) {
      // Logs errors if there is an error
      console.log(error);
    }
    console.log("directory created");
  });
} else {
  // Runs if folder does exists, removing the folder.
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("directory deleted.");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  //Checks if it exists
  fs.unlink("./docs/deleteme.txt", (error) => () => {
    //unlink = delete
    if (error) {
      console.log(error);
    }
    console.log("file deleted");
  });
}
