const express = require("express");
const router = express.Router();

// @route POST/posts
// @description Create new post
// @body content, image
// @access log in required

// @route GET/posts/user/:userId?page=1&limit=10
// @description Get posts user can see with pagination
// @access log in required

// @route PUT/posts/:id
// @description Update a post
// @body content, image
// @access log in required

// @route DELETE/posts/:id
// @description Delete a post
// @access log in required

// @route GET/posts/:id
// @description Get a single post
// @access log in required

module.exports = router;
