// Week 10 item.js

export default function Item({item, onSelect}) {
    return (
        <li className="border border-yellow-800 bg-yellow-400 w-96 mt-3 p-2 items-center justify-self-center">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p> Category: {item.category}</p>
            <button className="bg-orange-300 hover:bg-orange-800 cursor-pointer" onClick={onSelect}>View Recipes</button>
            <button className="bg-red-600 hover: cursor-pointer text-white">Delete</button>
        </li>

    )

}