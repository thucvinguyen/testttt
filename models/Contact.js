const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100, // Set appropriate maximum length for name
    },
    email: {
      type: String,
      required: true,
      maxlength: 100, // Set appropriate maximum length for email
    },
    message: {
      type: String,
      required: true,
      maxlength: 5000, // Set appropriate maximum length for message
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
