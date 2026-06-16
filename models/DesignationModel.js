const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Designation name is required"],
    unique: true,
    trim: true,
    maxlength: [50, "Designation cannot exceed 50 characters"]
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: [true, "Department is required"]
  },

  description: {
    type: String,
    trim: true,
    default: ""
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Designation", designationSchema);