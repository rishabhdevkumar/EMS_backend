const designationRepository = require("../repositories/designation.repository");
const Department = require("../models/department.model");

const createDesignation = async (data) => {
  const department = await Department.findById(data.department);

  if (!department) {
    throw new Error("Department not found");
  }

  const existingDesignation =
    await designationRepository.findDesignationByName(data.name);

  if (existingDesignation) {
    throw new Error("Designation already exists");
  }

  return await designationRepository.createDesignation(data);
};

const getAllDesignations = async () => {
  return await designationRepository.findAllDesignations();
};

const getDesignationById = async (id) => {
  const designation =
    await designationRepository.findDesignationById(id);

  if (!designation) {
    throw new Error("Designation not found");
  }

  return designation;
};

const editDesignation = async (id, data) => {
  const designation =
    await designationRepository.updateDesignation(id, data);

  if (!designation) {
    throw new Error("Designation not found");
  }

  return designation;
};


module.exports = {
  createDesignation,
  getAllDesignations,
  getDesignationById,
  editDesignation,
};