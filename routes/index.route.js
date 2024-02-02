const router = require("express").Router();
const usersRouter = require("./users.route");

router.use("/", usersRouter);

module.exports = router;
