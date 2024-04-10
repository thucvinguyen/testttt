const express = require("express");
const router = express.Router();

// @route POST/friends/request
// @description Send a friend request
// @body to user ID
// @access log in required

// @route GET/friends/request/ingoing
// @description Get a list of received pending requests
// @access log in required

// @route GET/friends
// @description Get list of friend
// @access log in required

// @route PUT/friends/request/:userId
// @description Accept, decline received pending requests
// @body status: "accepted" or "declined"
// @access log in required

// @route DELETE/friends/request/:userId
// @description Delete a request
// @access log in required

// @route DELETE/friends/:userId
// @description Delete a request
// @access log in required

module.exports = router;
