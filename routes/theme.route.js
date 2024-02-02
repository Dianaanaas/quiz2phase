const router = require("express").Router();
const React = require("react");
const ThemeList = require("../Components/ThemeList");
const { Theme } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const thems = await Theme.findAll();

    const html = res.renderComponent(ThemeList, { thems, title: "Theme" });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
