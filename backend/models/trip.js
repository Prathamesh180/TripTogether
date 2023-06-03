const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Please provide a date for the trip"],
  },
  time: {
    type: String,
    required: [true, "Please provide a time for the trip"],
  },
  member: {
    type: Number,
    required: [true, "Please provide the number of members for the trip"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Please provide the gender preference for the trip"],
  },
  age: {
    type: Number,
    required: [true, "Please provide the age for the trip"],
  },
  location: {
    type: String,
    required: [true, "Please provide the location for the trip"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
