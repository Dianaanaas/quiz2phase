
const router = require('express').Router();
const questRouter = require('./quest.route');
const themeRouter = require('./theme.route')

router.use('/themes', themeRouter)
router.use('/quest', questRouter);



module.exports = router;
