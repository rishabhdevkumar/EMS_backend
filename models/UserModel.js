const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: Number,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  dob: {
    type: Date,
    default: null
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: null
  },

  department: {
    type: String,
    default: null
  },

  salary: {
    type: Number,
    default: null
  },

  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee"
  },

  profileCompleted: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
