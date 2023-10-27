// Week 7 item.js

import Link from "next/link";
import ItemList from "app/week3/item-list";

export default function Item({item}) {
    return (
        <li className="border border-yellow-800 bg-yellow-400 w-96 m-4 p-2 items-center justify-self-center">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
        </li>

    )

}