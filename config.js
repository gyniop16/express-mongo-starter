const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.EXPRESS_MONGO_STARTER_DATABASE_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            ssl: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
