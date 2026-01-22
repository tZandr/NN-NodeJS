const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); // "/", "GET"

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  // send an html file
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      // res.write(data); -- Not needed if only one thing is sent.
      res.end(data); // in that case, data can be passed directly to end()
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for reqs on port 3000");
});
