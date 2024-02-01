const router = require('express').Router();
const questRouter = require('./quest.route');

router.use('/quest', questRouter);

module.exports = router;
