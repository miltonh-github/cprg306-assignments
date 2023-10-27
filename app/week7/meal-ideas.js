"use client"
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
    const data = await response.json();
    return data;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data.map((meal) => ({ ...meal })));
        } catch {
            console.error();
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, []);

    return (
        <div>
            <header>HELLO!</header>
            {meals[0] == null ?
                <li>No recipes found.</li>
            : meals.map((meal) => (
                <li>{meal.strMeal}</li>
                ))}
        </div>
    );

}