const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");
const { body } = require("express-validator");
const validators = require("../middlewares/validators");
// const authentication = require("../middlewares/authentication");

// @route POST/users
// @description User leaves the contact and messages
// @body name, email, message
// @access public
router.post(
  "/",
  validators.validate([
    body("name", "Invalid Name").exists().notEmpty(),
    body("email", "Invalid Email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("message", "Invalid Message").exists().notEmpty(),
  ]),
  contactController.userCreateContact
);

module.exports = router;
