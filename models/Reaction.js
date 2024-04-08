const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    targetType: { type: String, required: true, enum: ["Post", "Comment"] },
    targetId: {
      type: Schema.ObjectId,
      required: true,
      refPath: "targetType",
    },
    emoji: { type: String, required: true, enum: ["like", "dislike"] },

    // isDeleted: { type: Boolean, default: false, select: false },
    // commentCount: { type: Number, default: 0 },
    // reactions: {
    //   like: { type: Number, default: 0 },
    //   dislike: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;
