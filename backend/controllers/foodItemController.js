import FoodItem from '../models/FoodItem.js';

// Function to get all food items
export const getFoodItems = async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
