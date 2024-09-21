import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String,
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;
