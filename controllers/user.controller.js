const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Artical = require("../models/artical.model");

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
  res.render("artical_form", { title: "New Artical", user: req.user });
});

exports.artical_create_post = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Title field must not be empty")
    .escape(),
  body("text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Text field must not be empty")
    .escape(),
  body("date", "Invalid date").isISO8601().isDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const artical = new Artical({
      title: req.body.title,
      text: req.body.text,
      time_stamp: req.body.date,
      author: req.user._id,
    });

    if (!errors.isEmpty()) {
      res.render("artical_form", {
        title: "New Artical",
        user: req.user,
        artical,
        errors: errors.array(),
      });
    } else {
      await artical.save();
      res.redirect("/user/articals");
    }
  }),
];

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
