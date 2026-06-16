const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  designation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Designation",
    required: true
  },

  basicSalary: {
    type: Number,
    required: true,
    min: [0, "Basic salary cannot be negative"]
  },

  hra: {
    type: Number,
    default: 0
  },

  bonus: {
    type: Number,
    default: 0
  },

  deduction: {
    type: Number,
    default: 0
  },

  netSalary: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Salary", salarySchema);