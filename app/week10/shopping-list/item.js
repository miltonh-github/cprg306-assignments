// Week 10 item.js

export default function Item({item, onSelect, onDelete}) {
    return (
        <li className="border border-yellow-800 bg-yellow-400 w-96 mt-3 p-2">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p> Category: {item.category}</p>
            <div className="block">
                <button className="rounded-md p-2 bg-orange-300 hover:bg-orange-800 cursor-pointer" onClick={onSelect}>View Recipes</button>
                <button className="rounded-md p-2 bg-red-600 hover: cursor-pointer  text-white float-right" onClick={onDelete}>Delete</button>
            </div>
        </li>

    )

}