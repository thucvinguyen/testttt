const express = require("express");
const router = express.Router();
const userController = require("./controllers/user.controller");

// @route POST/users
// @description Registre new user
// @body name, email, password
// @access public
router.post("/", userController.register);

// @route GET/users?page=1&limit=10
// @description Get users with pagination
// @access log in required

// @route GET/users/me
// @description Get current user info
// @access log in required

// @route GET/users/:id
// @description Get user profile
// @access log in required

// @route PUT/users/:id
// @description Update user profile
// @body {name, avatarUrl, coverUrl... }
// @access log in required

module.exports = router;
