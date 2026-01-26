const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<p>home</p>");
  // res.sendFile("./views/index.html", { root: __dirname }); // __dirname = current directory
  res.render("index"); // looks for index.ejs in views folder
});

app.get("/about", (req, res) => {
  // res.send("<p>about</p>");
  // res.sendFile("./views/about.html", { root: __dirname }); //sends the file about.html
  res.render("about"); // looks for about.ejs in views folder
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page
app.use((req, res) => {
  // uses when no other route matches, aka when it reaches this point of the code.
  //res.status(404).res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
