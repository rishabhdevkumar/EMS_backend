const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

async function addUser(data) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = new User({
        employeeId: data.employeeId,
        name: data.name,
        email: data.email,
        dob: data.dob,
        gender: data.gender,
        department: data.department,
        salary: Number(data.salary),
        phone: Number(data.phone),
        role: data.role,
        password: hashedPassword
    });

    return await user.save();
}

async function getUsers() {
    return await User.find().sort({ createdAt: -1 });
}

module.exports = {
    addUser,
    getUsers
};
