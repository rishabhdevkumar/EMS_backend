const Salary = require("../models/salary.model");

const createSalary = async (data) => {
  return await Salary.create(data);
};

const getAllSalaries = async () => {
  return await Salary.find()
    .populate("designation", "name");
};

const getSalaryById = async (id) => {
  return await Salary.findById(id)
    .populate("designation", "name");
};

const updateSalary = async (id, data) => {
  return await Salary.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteSalary = async (id) => {
  return await Salary.findByIdAndDelete(id);
};

module.exports = {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalary,
  deleteSalary
};