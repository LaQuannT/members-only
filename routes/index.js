const express = require("express");
const router = express.Router();

const authenticate = require("../controllers/authn.controllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router
  .route("/sign-up")
  .get(authenticate.sign_up_get)
  .post(authenticate.sign_up_post);

module.exports = router;
