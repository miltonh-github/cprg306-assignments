"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    // alert("Fetch name: " + ingredient);
    // alert("fetched: " + data);
    return data;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try {
            setMeals([]);
            const data = await fetchMealIdeas(ingredient);
            let mealsList = data.meals;

            setMeals([...mealsList]);
            // alert("set: " + mealsList[0].strMeal);
            // alert("set: " + meals[0].strMeal);
         } catch {
            console.error();
         };
        

    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div className="ml-5">
            <header>RECIPES FOR {ingredient}</header>
            {meals.length > 0 && ingredient != null ? (
            <ul>
            {meals.map((meal) =>(
                <li className="text-white"key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );

}