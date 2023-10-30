"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    // setMeals([]);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data.map((meal) => [({ ...meal })]));
        } catch {
            console.error();
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, meals);

    return (
        <div>
            <header>HELLO!</header>
            <ul>
            {meals.map((meal) => {
                <li key={meal.idMeal}>{meal.strMeal}</li>
                })}
            </ul>
        </div>
    );

}