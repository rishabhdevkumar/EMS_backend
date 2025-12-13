const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

const connectDB = async () => {
    try {
        await mongoose.connect(serverConfig.MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("DB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
