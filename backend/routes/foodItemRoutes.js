import express from 'express';
import { getFoodItems } from '../controllers/foodItemController.js';

const router = express.Router();

// Route to get all food items
router.get('/', getFoodItems);

export default router;
