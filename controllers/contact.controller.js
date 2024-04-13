const Contact = require("../models/Contact");
const { sendResponse, AppError, catchAsync } = require("../helpers/utils");

const contactController = {};

contactController.userCreateContact = catchAsync(async (req, res) => {
  let { name, email, message } = req.body;

  const contact = await Contact.create({ name, email, message });

  return sendResponse(
    res,
    200,
    true,
    contact,
    null,
    "Get User Contact Successfully"
  );
});

module.exports = contactController;
