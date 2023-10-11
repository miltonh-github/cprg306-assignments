// Week5 Item List

"use client";
import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
      // map the JSON data to an array
    let itemArray = itemsData.map((item) => ({ ...item }));

      return (
        <section className="grid grid-cols-3 gap-5 p-5">
          {itemArray.map((item) => (
            <Item item={item} key={item.id}/>
          ))}
        </section>
      )
}