const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: String,
    tasks: [String],
    userId: {
      type: String,
      required: [true, "User Id is Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
