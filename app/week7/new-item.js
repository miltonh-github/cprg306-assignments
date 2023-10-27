// Week 7 new-item.js
"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        //Prevent default functionality
        event.preventDefault();
        // Create the newItem
        const newItem = {
            name,
            quantity,
            category
        };

        //Replace Alert functionality with a onAddItem prop call
        onAddItem(newItem);
        
        // Set to defaults
        setName("");
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        // setName(event.target.name);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
        // setQuantity(event.target.quantity);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        // setCategory(event.target.category);
    };

    return (
        <main>
            <form onSubmit={handleSubmit}
                className="bg-gray-300 p-8"
            >
            <h1 className="text-2xl text-gray-800 font-bold block">
            Add Item to Shopping List
            </h1>
                <label className="block mb-4">
                    <span>Item Name: </span>
                    <input 
                        value={name}
                        type="text"
                        onChange={handleNameChange}
                        className="block w-full"
                        placeholder="Chicken Breasts"
                        required
                        
                    />
                </label>
                <label className="block mb-4">
                    <span>Quantity: </span>
                    <input 
                        value={quantity}
                        type="number"
                        placeholder="1-99"
                        min="1"
                        max="99"
                        onChange={handleQuantityChange}
                        className="block"
                        required
                    />
                </label>
                <label className="block mb-4">
                    <span>Category: </span>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        required
                        className="block"
                    >
                        <option value="">-- Select Category --</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>

                    </select>
                </label >
                <button
                    type="submit"
                    className="block bg-yellow-400 hover:bg-yellow-200 focus:bg-white rounded-md p-2"
                >
                    Create Item
                </button>

            </form>
        </main>

        );
}
