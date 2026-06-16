const userService = require("../services/UserServices");

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

async function getAllUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserCountByRole(req, res) {
  try {
    const data = await userService.countUsersByRole();

    const result = {
      admin: 0,
      employee: 0
    };

    data.forEach(item => {
      result[item._id] = item.total;
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getLoggedInUser(req, res) {
  try {
    const user = await getUserById(req.user.id);

    return res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user"
    });
  }
}


module.exports = {
  addUser,
  getAllUsers,
  getUserCountByRole,
  getLoggedInUser
};
