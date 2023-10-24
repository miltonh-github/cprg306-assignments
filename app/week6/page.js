"use client";

// MODIFY page.js > DONE
// MODIFY new-item.js > DONE
// MODIFY item-list.js > DONE


import { useState } from "react";
import ItemList from "./item-list"  
import NewItem from "./new-item"
import itemsData from "./items.json";

export default function Home() {
  const [items, addNewItem] = useState(itemsData.map((item) => ({ ...item })));

  const handleAddItem = (item) => {
    addNewItem([...items, item]);
  };
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold m-2 text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">My Shopping List</h1>
        <ul>
          <ItemList items={items}/>
          <NewItem onAddItem={handleAddItem}/>
        </ul>
        
      </main>
    )
  }
  