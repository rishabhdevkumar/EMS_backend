const { loginUser } = require("../services/authService");

async function login(req, res) {
  try {
    const data = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      data,
      message: "Login successful",
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.reason || "Login failed",
    });
  }
}

module.exports = { login };
