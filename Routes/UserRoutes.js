const express = require('express');
const { addUser, getAllUsers, getUserCountByRole, getLoggedInUser } = require('../controllers/UserControllers');
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/add', addUser);
router.get('/all', getAllUsers);
router.get("/count-by-role", getUserCountByRole);
router.get("/me", authMiddleware, getLoggedInUser);


module.exports = router;
