

import Link from "next/link";
import ItemList from "app/week3/item-list";

export default function Item({name, quantity, category}) {
    return (
        <li className="border border-yellow-800 bg-yellow-400 w-96 m-4 p-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>

    )

}