const salaryRepository = require("../repositories/salary.repository");
const Designation = require("../models/designation.model");

const createSalary = async (data) => {

  const designation = await Designation.findById(
    data.designation
  );

  if (!designation) {
    throw new Error("Designation not found");
  }

  data.netSalary =
    Number(data.basicSalary || 0) +
    Number(data.hra || 0) +
    Number(data.bonus || 0) -
    Number(data.deduction || 0);

  return await salaryRepository.createSalary(data);
};

const getAllSalaries = async () => {
  return await salaryRepository.getAllSalaries();
};

const getSalaryById = async (id) => {

  const salary = await salaryRepository.getSalaryById(id);

  if (!salary) {
    throw new Error("Salary not found");
  }

  return salary;
};

const updateSalary = async (id, data) => {

  data.netSalary =
    Number(data.basicSalary || 0) +
    Number(data.hra || 0) +
    Number(data.bonus || 0) -
    Number(data.deduction || 0);

  const salary = await salaryRepository.updateSalary(
    id,
    data
  );

  if (!salary) {
    throw new Error("Salary not found");
  }

  return salary;
};

const removeSalary = async (id) => {

  const salary = await salaryRepository.deleteSalary(id);

  if (!salary) {
    throw new Error("Salary not found");
  }

  return salary;
};

module.exports = {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalary,
  removeSalary
};