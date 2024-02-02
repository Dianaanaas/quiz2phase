const router = require('express').Router();
const questionsRouter = require('./api/questApi');
const answerRouter = require('./api/newQuestApi')
const themeRouter = require('./view/theme.route');
const usersRouter = require('./view/users.route');

router.use('/', usersRouter);
router.use('/themes', themeRouter);
router.use('/api/questions/answer', questionsRouter);
router.use('/api/questions', answerRouter);

module.exports = router;
