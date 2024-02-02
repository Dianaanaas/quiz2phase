const router = require('express').Router();
const { Quest, Answer } = require('../../db/models');

const QuestI = require('../../Components/QuestI');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newId = +req.params.id + 1;
    const oneQuest = await Quest.findOne({ where: { id: newId }, include: { model: Answer } });
  
    const arr = await Quest.findAll({ where: { themeId: oneQuest.themeId } });
    if (oneQuest) {
      const html = res.renderComponent(QuestI, { quest: oneQuest });
      res.json({ html, message: 'ок' });
    } else {
      res.redirect('/themes');
    }
  } catch ({ message }) {
    res.send(message);
  }
});
module.exports = router;
