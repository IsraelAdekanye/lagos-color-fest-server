const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeesSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  phoneNumber: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    uppercase: true
  } 
}, {timestamps: true});

module.exports = mongoose.model("Attendee", attendeesSchema);