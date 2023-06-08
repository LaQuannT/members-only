const router = require("express").Router();
const authenticate = require("../controllers/auth.controllers");
const user = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", authenticate.loggedIn, user.profile_get);

module.exports = router;
