const router = require("express").Router();
const artical = require("../controllers/artical.controller");

/* GET home page. */
router.get("/", artical.get_all);

module.exports = router;
