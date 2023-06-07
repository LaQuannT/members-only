const User = require("../models/user.models");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render("sign_up_form", { title: "Sign up" });
});

exports.sign_up_post = [
  body("firstName", "First name must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("familyName", "Family name must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("Username minimum four charcters")
    .custom(async (value) => {
      const user = await User.find({ username: value });
      if (user) throw new Error("Username not avaliable");
    })
    .escape(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password minimum eight charcters"),
  body("passwordConfim")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords do not match"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newUser = new User({
      first_name: req.body.firstName,
      family_name: req.body.familyName,
      username: req.body.username,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      res.render("sign_up_form", {
        title: "Sign Up",
        user: newUser,
        errors: errors.array(),
      });
    } else {
      bcrypt.hash("somePassword", 10, async (err, hashedPassword) => {
        if (err) next(err);
        else {
          newUser.password = hashedPassword;
          await newUser.save();
        }
      });
      res.redirect("/");
    }
  }),
];
