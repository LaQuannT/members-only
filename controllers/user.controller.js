const asyncHandler = require("express-async-handler");

exports.profile_get = asyncHandler(async (req, res, next) => {
  res.send("LOGGED IN: user profile");
});
