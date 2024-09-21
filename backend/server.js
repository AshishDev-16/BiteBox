import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import foodItemRoutes from './routes/foodItemRoutes.js';

import authRoutes from './routes/auth.js';

const app = express();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the food item routes
app.use('/api/foodItems', foodItemRoutes);

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
