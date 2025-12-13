const express = require('express');     
const cors = require('cors');
const dotenv = require('dotenv');
const authRouter = require('./Routes/authRoutes');
const userRouter = require('./Routes/UserRoutes');
const connectDB = require('./config/dbConfig');
dotenv.config();  

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(process.env.PORT, async() => {
    await connectDB();
    console.log(`server is running on port ${process.env.PORT}`);
});
