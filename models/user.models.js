const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: string, required: true },
  family_name: { type: string, required: true },
  username: { type: string, required: true },
  password: { type: string, required: true },
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

module.exports = mongoose.model("User", UserSchema);
