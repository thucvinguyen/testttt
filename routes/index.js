var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "Welcome", data: "Hello" });
});

const contactApi = require("./contact.api");
router.use("/contacts", contactApi);

module.exports = router;
