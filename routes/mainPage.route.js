const router = require("express").Router();
const ReactDOMServer = require("react-dom/server"); //11. подключаем реактДомсервер
const React = require("react"); //10. подключаем реакт
const Form = require("../Components/Form");

//обработчик страницы с формой
router.get("/", async (req, res) => {
  try {
    const forma = React.createElement(Form, {
      title: "Форма",
    });
    const html = ReactDOMServer.renderToStaticMarkup(forma);
    const document = "<!DOCTYPE html>" + html;
    res.status(200).send(document);
  } catch ({ message }) {
    res.send(message);
  }
});

// //обработчик страницы с добавлением данных из формы
// app.post("/addForm", async (req, res) => {
//   try {
//     const { data } = req.body;
//     console.log(data, "---------");
//   } catch ({ message }) {
//     res.send(message);
//   }
// });

module.exports = router;
