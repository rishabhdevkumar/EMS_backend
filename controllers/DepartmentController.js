const departmentService = require("../services/DepartmentService");

async function addDepartment(req, res) {
    try {
        const department = await departmentService.addDepartment(req.body);
        res.status(201).json({ message: "Department created", department });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllDepartments(req, res) {
    try {
        const departments = await departmentService.getDepartments();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateDepartment(req, res) {
    try {
        const updated = await departmentService.editDepartment(
            req.params.id,
            req.body
        );
        res.status(200).json({ message: "Department updated", updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteDepartment(req, res) {
    try {
        await departmentService.removeDepartment(req.params.id);
        res.status(200).json({ message: "Department deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addDepartment,
    getAllDepartments,
    updateDepartment,
    deleteDepartment
};
