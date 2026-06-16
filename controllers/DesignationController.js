const designationService =
  require("../services/designation.service");

const createDesignation = async (req, res) => {
  try {
    const result =
      await designationService.createDesignation(req.body);

    res.status(201).json({
      success: true,
      message: "Designation created successfully",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getAllDesignations = async (req, res) => {
  try {
    const result =
      await designationService.getAllDesignations();

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

const getDesignationById = async (req, res) => {
  try {
    const result =
      await designationService.getDesignationById(req.params.id);

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

const updateDesignation = async (req, res) => {
  try {
    const result =
      await designationService.editDesignation(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message: "Designation updated successfully",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = {
  createDesignation,
  getAllDesignations,
  getDesignationById,
  updateDesignation
};