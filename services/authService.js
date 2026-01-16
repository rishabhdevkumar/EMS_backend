const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
const { findUser } = require("../Repository/UserRepository");

async function loginUser(authDetails) {
  const { email, password } = authDetails;

  const user = await findUser({ email });
  if (!user) throw { reason: "User not found", statusCode: 404 };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw { reason: "Invalid password", statusCode: 400 };

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    role: user.role,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}

module.exports = { loginUser };
