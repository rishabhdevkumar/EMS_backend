const userService = require("../services/UserServices");

// 👉 Register User (Basic)
async function addUser(req, res) {
  try {
    const user = await userService.addUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id
    });
  } catch (error) {
    console.error("REGISTER ERROR 👉", error);
    res.status(500).json({ error: error.message });
  }
}

// 👉 Get All Users
async function getAllUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addUser,
  getAllUsers
};
