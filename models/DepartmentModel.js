const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Department name is required"],
        unique: true,
        trim: true,
        minlength: [2, "Department name must be at least 2 characters"],
        maxlength: [50, "Department name cannot exceed 50 characters"],
        match: [/^[A-Za-z\s&-]+$/, "Department name contains invalid characters"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
        minlength: [10, "Description must be at least 10 characters"],
        maxlength: [500, "Description cannot exceed 500 characters"]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Department", departmentSchema);