// Week 6 Item List

"use client";
import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
      // map the JSON data to an array
    let itemArray = itemsData.map((item) => ({ ...item }));

    itemArray = itemArray.sort((a, b) => {
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
          <button class={sortBy === "name" ? "bg-yellow-400 p-1 mx-9 w-28" : "bg-yellow-500 p-1 mx-9 w-28"} onClick={(e) => setSortBy(e.target.value)} value="name">Name</button>
          <button class={sortBy === "category" ? "bg-yellow-400 p-1 mx-2 w-28" : "bg-yellow-500 p-1 mx-2 w-28"} onClick={(e) => setSortBy(e.target.value)} value="category">Category</button>
          <section className="grid grid-cols-2 gap-2 p-5">
            {itemArray.map((item) => (
              <Item item={item} key={item.id}/>
            ))}
          </section>
        </>
      )
}