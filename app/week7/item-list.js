// Week 6 Item List

"use client";
import { useState } from "react";
import Item from "./item.js";
// Remove json import; data is now being passed as a prop
// import itemsData from "./items.json";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

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
          <button class={sortBy === "name" ? "bg-yellow-400 p-1 w-28" : "bg-yellow-500 p-1 w-28"} onClick={(e) => setSortBy(e.target.value)} value="name">Name</button>
          <button class={sortBy === "category" ? "bg-yellow-400 p-1 w-28" : "bg-yellow-500 p-1 w-28"} onClick={(e) => setSortBy(e.target.value)} value="category">Category</button>
          <section className="grid grid-cols-2">
            {itemArray.map((item) => (
              <Item item={item} key={item.id}/>
            ))}
          </section>
        </>
      )
}