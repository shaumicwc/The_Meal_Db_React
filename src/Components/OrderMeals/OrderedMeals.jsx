import React from 'react';
import './OrderedMeals.css';

const OrderedMeals = ({ cart, clearCart }) => {
    // const mealNames = cart.map(meal => meal.strMeal);
    let mealNames = [];
    for(const name of cart){
        name.quantity = name.quantity || 1;
        mealNames.push(name.strMeal)
    }
  if (mealNames.length === 0) {
    return <div className='ordered-meals'>No meals selected</div>;
  }

  return (
    <div className='ordered-meals'>
      <h4>Selected Meals: {mealNames.join(', ')}</h4>
      <button onClick={clearCart}>Clear Order</button>
    </div>
  );
};

export default OrderedMeals;




