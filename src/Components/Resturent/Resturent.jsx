import React, { useEffect, useState } from 'react';
import { addToDb, getValueById, getShoppingCart, deleteShoppingCart} from '../../Utilitise/utilitis';
import Meals from '../Meals/Meals';
import OrderedMeals from '../OrderMeals/OrderedMeals';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    
    useEffect(() =>{
        if(searchText){
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
        }

    }, [searchText])

    useEffect(() =>{
        const storedCart = getShoppingCart();
        let savedCart = [];
        for(const id in storedCart){
            const addedMeal = meals.find(product => product.id === id);
            if(addedMeal){
                const quantity = storedCart[id];
                addedMeal.quantity = quantity;
                savedCart.push(addedMeal);
            }

        }
        setCart(savedCart)
    } ,[meals])
    
    const handleInputChange = (event) => {
        if (event.key === 'Enter') {
            searchValue();
        }
    }    

    const searchValue= () => {
        setSearchText(getValueById('input-field'));
    }

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal]
        // let newCart = [];
        // const exists = cart.find( ml => ml.id === meal.id)
        // if(!exists){
        //     meal.quantity = 1;
        //     newCart = [...cart, meal];
        // } else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(ml => ml.id !== meal.id);
        //     newCart = [...remaining, meal];
        // }
        setCart(newCart);
        addToDb(meal.idMeal)
    }
    const clearCart = () =>{
        let emptyCart = [];
        setCart(emptyCart);
        deleteShoppingCart();
    }
    return (
        <>
        <div className='container'>
        <div className='search-field'>
            <input className='input-field' id='input-field' type="text" onKeyDown={handleInputChange}/>
            <button className='search-btn' onClick={searchValue}>Search</button>
        </div>
        <div className='restaurant-container'>
            <div className='meals-container'>
                {
                    meals.map( meal => <Meals 
                    meal={meal}
                    key={meal.id}
                    handleAddToCart={handleAddToCart}
                    ></Meals>)
                }
            </div>
            <div className='ordered-meals-container'>
                <OrderedMeals 
                cart={cart} clearCart={clearCart}
                ></OrderedMeals>
            </div>
            
        </div>
        </div>

        </>
    );
};

export default Restaurant;
