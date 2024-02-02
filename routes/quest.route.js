const router = require('express').Router();
const { Quest, Answer, User } = require('../db/models');
const Quests = require('../Components/Quest');

router.get('/', async (req, res) => {
  try {
    const quest = await Quest.findOne({ where: { themeId: 1 }, include: { model: Answer } });
    console.log(quest.Answers);
    const html = res.renderComponent(Quests, { title: 'Вопросики', quest });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.put('/', async (req, res) => {
  try {
    const { id } = req.body;
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
