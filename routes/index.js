var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "Welcome", data: "Hello" });
});

const authApi = require("./auth.api");
router.use("/auth", authApi);

const userApi = require("./user.api");
router.use("/users", userApi);

const postApi = require("./post.api");
router.use("/posts", postApi);

const reactionApi = require("./reaction.api");
router.use("/reactions", reactionApi);

const friendApi = require("./friend.api");
router.use("/friends", friendApi);

const commentApi = require("./comment.api");
router.use("/comments", commentApi);

module.exports = router;
