const Department = require("../models/DepartmentModel");

async function createDepartment(data) {
    return await Department.create(data);
}

async function getAllDepartments() {
    return await Department.find().sort({ createdAt: -1 });
}

async function updateDepartment(id, data) {
    return await Department.findByIdAndUpdate(id, data, { new: true });
}

async function deleteDepartment(id) {
    return await Department.findByIdAndDelete(id);
}

module.exports = {
    createDepartment,
    getAllDepartments,
    updateDepartment,
    deleteDepartment
};
