const User = require("../models/UserModel");

async function createUser(data) {
    return await User.create(data);
}

async function getAllUsers() {
    return await User.find().select("-password");
}

module.exports = {
    createUser,
    getAllUsers
};
