const departmentRepo = require("../Repository/DepartmentRepository");

async function addDepartment(data) {
    return await departmentRepo.createDepartment(data);
}

async function getDepartments() {
    return await departmentRepo.getAllDepartments();
}

async function editDepartment(id, data) {
    return await departmentRepo.updateDepartment(id, data);
}

async function removeDepartment(id) {
    return await departmentRepo.deleteDepartment(id);
}

module.exports = {
    addDepartment,
    getDepartments,
    editDepartment,
    removeDepartment
};
