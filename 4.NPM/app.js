const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<p>home</p>"); -- instead, do below:
  res.sendFile("./views/index.html", { root: __dirname }); // __dirname = current directory
});

app.get("/about", (req, res) => {
  // res.send("<p>about</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  // uses when no other route matches, aka when it reaches this point of the code.
  res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});
