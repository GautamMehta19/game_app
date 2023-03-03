const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const cricketSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    cricMatch: {
      type: Number,
      trim: true,
      default: 0,
    },
    cricRuns: {
      type: Number,
      trim: true,
      default: 0,
    },
    cricWins: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cricket", cricketSchema);
