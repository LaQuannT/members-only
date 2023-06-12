const asyncHandler = require("express-async-handler");

exports.profile_get = asyncHandler(async (req, res, next) => {
  res.render("profile", { title: "Profile", user: req.user });
});
