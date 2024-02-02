const router = require("express").Router();
const themeRouter = require('./theme.route')

router.use('/themes', themeRouter)



module.exports = router;
