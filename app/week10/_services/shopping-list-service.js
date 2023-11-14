import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addNewItem(userId, item) {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    // let userItemsCollection = collection(db, "users", userId, "items");
    // let addItemPromise = await addDoc(userItemsCollection, item);
    // console.log(addItemPromise.id);
}

export async function getShoppingList(userId) {
    // const q = query(
    //     collection(db, "users", "user1", "items"),
    //     where("userId", "=", userId)
    //   );
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    //   });
    let userItemsCollection = collection(db, "users", userId, "items");
    let collectionSnapshot = await getDocs(userItemsCollection);
    let itemList = [];
    collectionSnapshot.forEach(doc => {
      let thisItem = {
        id: doc.id,
        ...doc.data()
      }
      console.log(doc.id, " - ", doc.data());
      itemList.push(thisItem);
    });
    // console.log("complete");
    // console.log(itemList);
    return(itemList);
}