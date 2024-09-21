import { useEffect, useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list, setFoodList } = useContext(StoreContext);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/foodItems');
                const data = await response.json();
                setFoodList(data); // Assuming setFoodList updates food_list in your context
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoodItems();
    }, [setFoodList]);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null; // Avoid returning anything if the category doesn't match
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
