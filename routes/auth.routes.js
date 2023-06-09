const router = require("express").Router();
const authenticate = require("../controllers/auth.controllers");

router
  .route("/sign-up")
  .get(authenticate.sign_up_get)
  .post(authenticate.sign_up_post);

router.get("/login", authenticate.login_get);
router.post("/login/password", authenticate.login_post);
router.get("/logout", authenticate.logout);

module.exports = router;
