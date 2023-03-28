import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';

const Meals = (props) => {
    const {strMeal, strArea, strMealThumb} = props.meal;
    const handleAddToCart = props.handleAddToCart;
    return (
            <div className='meals-container meal'>
                <img src={strMealThumb} alt="" className='meal-image'/>
                <div>
                    <h4>Name: {strMeal}</h4>
                    <h4>Meals Area: {strArea}</h4>
                    <button onClick={() => handleAddToCart(props.meal)} className='select-btn'>Select Meal
                        <FontAwesomeIcon icon={faBowlRice}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

    );
};

export default Meals;
