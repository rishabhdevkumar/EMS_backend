const salaryService = require("../services/salary.service");

const createSalary = async (req, res) => {
  try {

    const result =
      await salaryService.createSalary(req.body);

    res.status(201).json({
      success: true,
      message: "Salary created successfully",
      data: result
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};

const getAllSalaries = async (req, res) => {
  try {

    const result =
      await salaryService.getAllSalaries();

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getSalaryById = async (req, res) => {
  try {

    const result =
      await salaryService.getSalaryById(req.params.id);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message
    });

  }
};

const updateSalary = async (req, res) => {
  try {

    const result =
      await salaryService.updateSalary(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message: "Salary updated successfully",
      data: result
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};

const deleteSalary = async (req, res) => {
  try {

    await salaryService.removeSalary(req.params.id);

    res.status(200).json({
      success: true,
      message: "Salary deleted successfully"
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalary,
  deleteSalary
};