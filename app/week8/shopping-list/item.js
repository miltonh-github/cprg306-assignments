// Week 7 item.js

export default function Item({item, onSelect}) {
    return (
        <li className="border border-yellow-800 bg-yellow-400 w-96 mt-3 hover:bg-orange-800 cursor-pointer p-2 items-center justify-self-center" onClick={onSelect}>
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p> Category: {item.category}</p>
        </li>

    )

}