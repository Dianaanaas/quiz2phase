const router = require('express').Router();
const { Quest, Answer } = require('../db/models');
const Quests = require('../Components/Quest');

router.get('/', async (req, res) => {
  try {
    const quest = await Quest.findOne({ where: { themeId: 2 }, include: { model: Answer } });
    // console.log(quests);
    // const answers = await Answer.findAll({ where: { questId: quests.id } });
    // const newItem =
    // console.log(answers);
    const html = res.renderComponent(Quests, { title: 'Вопросики', quest });
    res.send(html);

    // const answers = await Answer.findAll({where: {quests}})
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
