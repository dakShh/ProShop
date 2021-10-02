// import express from "express";
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  res.send(products.find((x) => x._id === req.params.id));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
