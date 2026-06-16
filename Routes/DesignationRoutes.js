const express = require("express");
const router = express.Router();

const {
  createDesignation,
  getAllDesignations,
  getDesignationById,
  updateDesignation
} = require("../controllers/DesignationController");

router.post("/", createDesignation);

router.get("/", getAllDesignations);

router.get("/:id", getDesignationById);

router.put("/:id", updateDesignation);

module.exports = router;