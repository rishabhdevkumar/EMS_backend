const userService = require("../services/UserServices");

// 👉 Add User
async function addUser(req, res) {
    try {
        const user = await userService.addUser(req.body);
        res.status(201).json({ message: "User created", user });
    } catch (error) {
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
