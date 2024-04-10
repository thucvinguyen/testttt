const express = require("express");
const authentication = require("../middlewares/authentication");
const router = express.Router();
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");
const postController = require("../controllers/post.controller");

// @route POST/posts
// @description Create new post
// @body content, image
// @access log in required
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([body("content", "Missing Content").exists().notEmpty()]),
  postController.createNewPost
);

// @route GET/posts/user/:userId?page=1&limit=10
// @description Get posts user can see with pagination
// @access log in required
router.get(
  "/user/:userId",
  validators.validate([
    param("userId").exists().isString().custom(validators.checkObjectId),
  ]),
  postController.getPosts
);

// @route PUT/posts/:id
// @description Update a post
// @body content, image
// @access log in required
router.put(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  postController.updateSinglePost
);

// @route DELETE/posts/:id
// @description Delete a post
// @access log in required
router.delete(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  postController.deleteSinglePost
);

// @route GET/posts/:id
// @description Get a single post
// @access log in required
router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  postController.getSinglePost
);

// @route GET/posts/:id/comments
// @description Get comments for post
// @access log in required
router.get(
  "/:id/comments",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  postController.getCommentsOfPost
);

module.exports = router;
