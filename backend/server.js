const express = require("express");
const app = express();
const products = require("./data/products");
app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  res.send(products.find((x) => x._id === req.params.id));
});
app.listen(5000, console.log("Server running on port 5000"));
