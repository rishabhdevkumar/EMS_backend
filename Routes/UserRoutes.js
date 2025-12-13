const express = require('express');
const { addUser, getAllUsers } = require('../controllers/UserControllers');

const router = express.Router();

router.post('/add', addUser);
router.get('/all', getAllUsers);

module.exports = router;
