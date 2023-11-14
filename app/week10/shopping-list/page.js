"use client";

// WEEK 10

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"
import ItemList from "./item-list"  
import NewItem from "./new-item"
// import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";
import { getShoppingList, addItem, deleteItem } from "../_services/shopping-list-service.js";

export default function Home() {
  const [items, setItems] = useState([]);
  const [selectedItemName, updateItemState] = useState(null);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function loadItems() {
    try {
      const data = await getShoppingList(user.uid);
      let itemsToSet = data;
      setItems(itemsToSet);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadItems();
}, [user]);

  // problem
  const handleItemSelect = (item) => {
    //Two-step itemName cleaning
    // First remove all emojis, then remove commas
    let itemName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|",")/g, '');;
    itemName = itemName.split(', ')[0];
    updateItemState(itemName);
  }

  const handleDabe = () => {
    console.log(items);
  }

  const handleAddItem = (item) => {
    addItem(user.uid, item);
    loadItems();
  };

  const handleDeleteItem = (item) => {
    deleteItem(user.uid, item);
    loadItems();
  }
    return (
      <>
        {user ? (<main className="flex flex-col p-24">
          <h1 className="text-2xl font-bold m-2 text-orange-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">My Shopping List</h1>
          <ul>
          <div className="flex flex-row content-around">
            <div>
              <NewItem onAddItem={handleAddItem}/>
              <ItemList items={items} onItemSelect={handleItemSelect} onDeleteSelect={handleDeleteItem}/>
            </div>
              <MealIdeas ingredient={selectedItemName}/>
              
          </div>
          
          <button onClick={handleDabe}>test</button>

          </ul>
          
        </main>) : (
          <p>Must be logged in to access page contents.</p>
          
        )}
        
        
      </>
    )
  }
  