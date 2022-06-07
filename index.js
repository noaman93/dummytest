const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  //   res.send("<h1>This will be Home Page</h1>");
  res.send("Home page");
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact Us Page</h1>");
  res.send("Contact page");
});

app.get("/products", (req, res) => {
  res.send("Products page");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server Started`);
});
