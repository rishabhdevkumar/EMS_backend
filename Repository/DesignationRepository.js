const Designation = require("../models/designation.model");

const createDesignation = async (data) => {
  return await Designation.create(data);
};

const findDesignationByName = async (name) => {
  return await Designation.findOne({ name });
};

const findDesignationById = async (id) => {
  return await Designation.findById(id);
};

const findAllDesignations = async () => {
  return await Designation.find().populate("department", "name");
};

const updateDesignation = async (id, data) => {
  return await Designation.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );
};


module.exports = {
  createDesignation,
  findDesignationByName,
  findDesignationById,
  findAllDesignations,
  updateDesignation
};