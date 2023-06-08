const express = require("express");
const router = express.Router();

const authenticate = require("../controllers/auth.controllers");
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router
  .route("/sign-up")
  .get(authenticate.sign_up_get)
  .post(authenticate.sign_up_post);

router.get("/login", authenticate.login_get);
router.post("/login/password", authenticate.login_post);

module.exports = router;
