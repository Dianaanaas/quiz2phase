const router = require('express').Router();
const { Answer, User, Quest } = require('../../db/models');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneAnswer = await Answer.findOne({ where: { id } });
    const { user } = res.app.locals;
    const oneUser = await User.findOne({ where: { id: user.id } });

    if (oneAnswer.rightAnswer) {
      oneUser.score += 10;
      oneUser.save();
      res.app.locals.user.score += 10;
      res.json({ message: 'ок', score: oneUser.score });
    } else {
      oneUser.score -= 10;
      oneUser.save();
      res.app.locals.user.score -= 10;
      res.json({ message: 'плохо', score: oneUser.score });
    }
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
