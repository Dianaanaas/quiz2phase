const router = require("express").Router();

const Form = require("../Components/Form");
const { User } = require("../db/models");

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name, score: 0 });
    res.app.locals.user = user;
    res.json({ message: "ok" });
  } catch ({ message }) {
    res.send(message);
  }
});

router.get("/", async (req, res) => {
  try {
    const html = res.renderComponent(Form, {
      title: "Форма",
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
