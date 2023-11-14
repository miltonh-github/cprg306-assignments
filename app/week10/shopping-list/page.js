"use client";

// WEEK 10

import Link from "next/link";
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

  // const handleDabe = () => {
  //   console.log(items);
  // }

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
      <Link href="/week10" className="hover:text-sky-700 text-purple-950">BACK TO WEEK 10</Link>
      {/* Check for user logged in */}
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
          
          {/* <button onClick={handleDabe}>test</button> */}

          </ul>
          {/* If it's me, display Serval! */}
          { user.email === "miltonhh213@gmail.com" 
          ? (

          <div className="group">
            <div className="fixed right-2 bottom-2">
              <div className="transition-opacity ease-in duration-700 opacity-0 group-hover:opacity-100">
                <p className="bg-white rounded-tl-lg rounded-r-lg p-[5vh] text-lg">
                  ようこそ！<br/>
                  私サーバルキャトサーバルだよ！
                </p>
              <div className="border-l-[25px] border-l-transparent
                border-t-[100px] border-t-white
                border-r-[25px] border-r-transparent w-10">
              </div>
            </div>
            <a target="_blank" href="https://www.youtube.com/watch?v=VTNKxjJATCc&list=OLAK5uy_nJ-G6BAUEe19F-Xmwd8HtIaNtLN8Gf6cw&index=4&ab_channel=Doubutsubiskets-Topic">
              <img className="h-[30vh] w-[7.5]"src="https://japari-library.com/w/images/6/6b/OzakiServalOriginal.png" />
            </a>
            </div>
          </div>
          ) 
          // Otherwise, display nothing.
          : 
          (<div/>)}
        {/* Not logged in */}
        </main>) : (
          <p>Must be logged in to access page contents.</p>
          
        )}
        
        
      </>
    )
  }
  