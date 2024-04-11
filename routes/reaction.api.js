const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");
const reactionController = require("../controllers/reaction.controller");

// @route POST/reactions
// @description Save reactions to post, comment
// @body targetType: 'post' or 'comment', targetId, emoji
// @login required
// router.post(
//   "/",
//   authentication.loginRequired,
//   validators.validate([
//     body("targetType", "Invalid targetType").exists().isIn("Post", "Comment"),
//     body("targetId", "Invalid targetId")
//       .exists()
//       .custom(validators.checkObjectId),
//     body("emoji", "Invalid emoji").exists().isIn("like", "dislike"),
//   ]),
//   reactionController.saveReaction
// );

module.exports = router;
