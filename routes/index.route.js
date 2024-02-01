const router = require("express").Router();
const mainRouter = require("./mainPage.route");

router.use("/reg", mainRouter);

module.exports = router;
