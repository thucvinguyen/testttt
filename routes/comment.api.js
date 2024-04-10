const express = require("express");
const authentication = require("../middlewares/authentication");
const validators = require("../middlewares/validators");
const commentController = require("../controllers/comment.controller");
const router = express.Router();
const { body, param } = require("express-validator");

// @route POST/comments
// @description Create a comment
// @body contenet, postId
// @access login
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([
    body("content", "Missing Content").exists().notEmpty(),
    body("postId", "Missing postId")
      .exists()
      .isString()
      .custom(validators.checkObjectId),
  ]),
  commentController.createNewComment
);
// @route PUT/comments/:id
// @description Update a comment
// @body contenet, postId
// @access login
router.put(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
    body("content", "Missing Content").exists().notEmpty(),
  ]),
  commentController.updateSingleComment
);

// @route DELETE/comments/:id
// @description Delete a comment
// @access login
router.delete(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  commentController.deleteSingleComment
);

// @route GET/comments/:id
// @description Get a comment detail
// @access login
router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  commentController.getSingleComment
);

module.exports = router;
