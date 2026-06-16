const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { findUserById } = require("../Repository/UserRepository");

async function addUser(data) {

  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Find last created user (highest employeeId)
  const lastUser = await User.findOne().sort({ employeeId: -1 });

  let nextIdNumber = 1001;

  if (lastUser && lastUser.employeeId) {
    const lastNumber = parseInt(lastUser.employeeId.replace("EMP", ""));
    nextIdNumber = lastNumber + 1;
  }

  const employeeId = `EMP${nextIdNumber}`;

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
  return await User.find({ role: "employee" })
    .sort({ createdAt: -1 })
    .select("-password");
}

async function updateProfile(userId, data) {
  return await User.findByIdAndUpdate(
    userId,
    {
      dob: data.dob,
      gender: data.gender,
      department: data.department,
      salary: data.salary,
      profileCompleted: true,
    },
    { new: true }
  );
}

async function countUsersByRole() {
  return await User.aggregate([
    {
      $group: {
        _id: "$role",
        total: { $sum: 1 },
      },
    },
  ]);
}

async function getUserById(userId) {
  return await findUserById(userId); // ✅ FIX HERE
}

module.exports = {
  addUser,
  getUsers,
  updateProfile,
  countUsersByRole,
  getUserById,
};
