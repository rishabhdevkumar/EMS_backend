const express = require("express");
const router = express.Router();

const {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalary,
  deleteSalary
} = require("../controllers/SalaryController");

router.post("/", createSalary);

router.get("/", getAllSalaries);

router.get("/:id", getSalaryById);

router.put("/:id", updateSalary);

router.delete("/:id", deleteSalary);

module.exports = router;