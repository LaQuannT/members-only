const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const ArticalSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  time_stamp: { type: Date, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

ArticalSchema.virtual("url").get(function () {
  return `/user/artical/${this._id}`;
});

ArticalSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.time_stamp).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Artical", ArticalSchema);
