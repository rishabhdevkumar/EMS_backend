require("dotenv").config(); 

const express = require("express");
const cors = require("cors");

const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/UserRoutes");
const departmentRoutes = require("./Routes/DepartmentRoutes");
const designation = require("./Routes/DesignationRoutes");
const salaryRoutes = require("./Routes/SalaryRoutes");
const connectDB = require("./config/dbConfig");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/departments", departmentRoutes);
app.use("/api/designations", designation);
app.use("/api/salaries", salaryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
