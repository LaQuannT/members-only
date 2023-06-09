const router = require("express").Router();
const user = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("/profile");
});

router.get("/profile", user.profile_get);

router.get("/articals", user.all_articals_get);

router
  .route("/artical/create")
  .get(user.artical_create_get)
  .post(user.artical_create_post);

router
  .route("/artical/:id/delete")
  .get(user.artical_delete_get)
  .post(user.artical_delete_post);

router
  .route("/artical/:id/update")
  .get(user.artical_update_get)
  .post(user.artical_update_post);

router.get("/artical/:id", user.artical_get);

module.exports = router;
