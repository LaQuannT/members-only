const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const createHttpError = require("http-errors");

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  family_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("name").get(function () {
  if (this.first_name && this.family_name) {
    const fullName = `${this.first_name} ${this.family_name}`;
    return fullName;
  }
});

UserSchema.virtual("url").get(function () {
  return `/user/${this._id}`;
});

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw createHttpError.InternalServerError(error.message);
  }
};

module.exports = mongoose.model("User", UserSchema);
