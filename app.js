require("@babel/register");
const express = require("express");
const ssr = require("./middleware/render");
const indexRouter = require("./routes/index.route");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello, world");
});

app.listen(3000, () => {
  console.log("сервак запущен");
});
