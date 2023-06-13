const router = require("express").Router();
const user = require("../controllers/user.controller");
const artical = require("../controllers/artical.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("/user/profile");
});

router.get("/profile", user.profile_get);

router.get("/myarticals", artical.get_by_author);

router
  .route("/artical/create")
  .get(artical.create_get)
  .post(artical.create_post);

router
  .route("/artical/:id/delete")
  .get(artical.delete_get)
  .post(artical.delete_post);

router
  .route("/artical/:id/update")
  .get(artical.update_get)
  .post(artical.update_post);

module.exports = router;
