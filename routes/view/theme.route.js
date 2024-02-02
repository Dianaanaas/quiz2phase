const router = require('express').Router();
const ThemeList = require('../../Components/ThemeList');
const { Theme, Quest, Answer } = require('../../db/models');
const Quests = require('../../Components/Quest');

router.get('/', async (req, res) => {
  try {
    const thems = await Theme.findAll();

    const html = res.renderComponent(ThemeList, { thems, title: 'Theme' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:id/quest', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const quest = await Quest.findOne({ where: { themeId: id }, include: { model: Answer } });
    const html = res.renderComponent(Quests, { title: 'Вопросики', quest });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});


module.exports = router;
