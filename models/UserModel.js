const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
      ]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit mobile number"
      ]
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      maxlength: [100, "Password is too long"]
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      trim: true,
      required: [true, "Department is required"]
    },

    designation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Designation",
      trim: true,
      required: [true, "Designation is required"]
    },

    joiningDate: {
      type: Date,
      default: null
    },

    salary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Salary",
      min: [0, "Salary cannot be negative"],
      default: 0
    },

    profileImage: {
      type: String,
      trim: true,
      default: null
    },

    address: {
      type: String,
      trim: true,
      maxlength: [500, "Address cannot exceed 500 characters"],
      default: null
    },

    role: {
      type: String,
      enum: {
        values: ["admin", "hr", "employee"],
        message: "Role must be admin, hr or employee"
      },
      default: "employee"
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "Status must be active or inactive"
      },
      default: "active"
    },

    lastLogin: {
      type: Date,
      default: null
    },

    profileCompleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);