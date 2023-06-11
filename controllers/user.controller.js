const asyncHandler = require("express-async-handler");

exports.all_articals_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: all articals");
});

exports.artical_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: single artical ");
});

exports.profile_get = asyncHandler(async (req, res, next) => {
  res.render("profile", { title: "Profile", user: req.user });
});

exports.artical_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.artical_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.artical_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.artical_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.artical_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.artical_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});
