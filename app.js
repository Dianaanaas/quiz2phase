require("@babel/register");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ssr = require("./middleware/render");
const indexRouter = require("./routes/index.route");

const app = express();

app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение(если метод POST)

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev")); //подключили морган
app.use(ssr); //подключили мидлварку

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("сервак запущен");
});
