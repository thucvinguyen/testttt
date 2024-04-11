const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const Reaction = require("../models/Reaction");
const mongoose = require("mongoose");

const reactionController = {};
const calculateReactions = async (targetId, targetType) => {
  const stats = await Reaction.aggregate([
    // Match documents where targetId matches the provided targetId
    {
      $match: { targetId: new mongoose.Types.ObjectId(targetId) },
    },
    // Group by targetType and calculate the sum of likes and dislikes
    {
      $group: {
        _id: "$targetId",
        like: {
          $sum: {
            $cond: [{ $eq: ["$emoji", "like"] }, 1, 0],
          },
        },
        dislike: {
          $sum: {
            $cond: [{ $eq: ["$emoji", "dislike"] }, 1, 0],
          },
        },
      },
    },
  ]);
  console.log(stats);
  return stats;
};
reactionController.saveReaction = catchAsync(async (req, res, next) => {
  const currentUserId = req.userId;
  const { targetType, targetId, emoji } = req.body;
  // Check target type exists
  const targetObj = await mongoose.model(targetType).findById(targetId);
  if (!targetObj)
    throw new AppError(400, `${targetType} not found`, "Create Reaction Error");

  // Find reaction if exists
  let reaction = await Reaction.findOne({
    targetType,
    targetId,
    author: currentUserId,
  });
  // If there is no reaction in DB -> create a new reaction
  if (!reaction) {
    reaction = await Reaction.create({
      targetType,
      targetId,
      author: currentUserId,
      emoji,
    });
  } else {
    // If there is a previous reaction in DB -> compare reaction
    if (reaction.emoji === emoji) {
      // If they are the same -> delete reaction
      await reaction.delete();
    } else {
      // If they are not the same -> update reaction
      reaction.emoji = emoji;
      await reaction.save();
    }
  }

  const reactions = await calculateReactions(targetId, targetType);

  return sendResponse(res, 200, true, reactions, null, "React Successfully");
});

module.exports = reactionController;
