const User = require("../models/User");
// const { sendResponse, AppError } = require("../helpers/utils");

const userController = {};

userController.register = async (req, res, next) => {
  res.send("User Registration");
};

module.exports = userController;
