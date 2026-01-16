const express = require("express");
const {
    addDepartment,
    getAllDepartments,
    updateDepartment,
    deleteDepartment
} = require("../controllers/DepartmentController");

const router = express.Router();

router.post("/add", addDepartment);
router.get("/getall", getAllDepartments);
router.put("/update/:id", updateDepartment);
router.delete("/delete/:id", deleteDepartment);

module.exports = router;
