const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); // "/", "GET"

  // set header content type
  res.setHeader("Content-Type", "text/html");
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write("<p>Hello World</p>");
  res.write("<p>Hello again</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for reqs on port 3000");
});
