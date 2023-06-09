const router = require("express").Router();
const user = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("/profile");
});

router.get("/profile", user.profile_get);

module.exports = router;
