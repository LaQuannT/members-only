const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticalSchema = new Schema({
  tite: { type: string, required: true },
  text: { type: string, required: true },
  time_stamp: new Date.now(),
  author: { type: Schema.Types.ObjectId, Ref: "User", required: true },
});

ArticalSchema.virtual("url").get(function () {
  return `/artical/${this._id}`;
});

module.exports = mongoose.model("Artical", ArticalSchema);