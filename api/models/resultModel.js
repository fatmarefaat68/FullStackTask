const mongoose = require("mongoose");
const resultSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("result", resultSchema);
