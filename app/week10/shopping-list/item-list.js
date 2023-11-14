// Week 10 Item List

"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect, onDeleteSelect }) {
    const [sortBy, setSortBy] = useState("name");

    // NOTE: since in week10 shopping-list-service returns the item list as an array and not a json,
    // had to modify [items] to become items.
    let itemArray = items.sort((a, b) => {
      if (isNaN(parseInt(a[sortBy]))) {
        // sort alphabetically
        let nameA = a[sortBy].toUpperCase();
        let nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        return a[sortBy] - b[sortBy];
      }
    });

      return (
        <>
        {items ? (
          <section className="">
          <button className={sortBy === "name" ? "bg-orange-400 p-1 w-28 mt-3" : "bg-orange-500 p-1 w-28 mt-3"} onClick={(e) => setSortBy(e.target.value)} value="name">Name</button>
          <button className={sortBy === "category" ? "bg-orange-400 p-1 w-28 mt-3" : "bg-orange-500 p-1 w-28 mt-3"} onClick={(e) => setSortBy(e.target.value)} value="category">Category</button>
            {itemArray.map((item) => (
              <Item item={item} key={item.id} onSelect={ () => onItemSelect(item)} onDelete={ () => onDeleteSelect(item)}/>
            ))}
          </section>) : (
          <p className="text-xl text-center">No items in list.</p>
        )}
          
        </>
      )
}