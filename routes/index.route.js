const router = require('express').Router();
const questRouter = require('./quest.route');
const themeRouter = require('./theme.route')
const usersRouter = require("./users.route");

router.use('/themes', themeRouter)
router.use('/quest', questRouter);
router.use("/", usersRouter);


module.exports = router;
