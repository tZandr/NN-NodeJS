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
      res.statusCode = 200; // OK
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; // Redirect
      res.setHeader("Location", "/about"); // relocate to /about
      res.end(); // we don't need to send any more data
      break;
    default:
      path += "404.html";
      res.statusCode = 404; // Not found
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
