const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

async function addUser(data) {

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const count = await User.countDocuments();
  const employeeId = `EMP${1000 + count + 1}`;

  const user = new User({
    employeeId,
    name: data.name,
    email: data.email,
    phone: Number(data.phone),
    password: hashedPassword,
    role: data.role || "employee",
  });

  return await user.save();
}

async function getUsers() {
  return await User.find().sort({ createdAt: -1 }).select("-password");
}

async function updateProfile(userId, data) {
  return await User.findByIdAndUpdate(
    userId,
    {
      dob: data.dob,
      gender: data.gender,
      department: data.department,
      salary: data.salary,
      profileCompleted: true
    },
    { new: true }
  );
}

module.exports = {
  addUser,
  getUsers,
  updateProfile
};
