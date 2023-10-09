import ItemList from "./item-list"

export default function Home() {
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold m-2 text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">My Shopping List</h1>
        <ul>
          <ItemList />
        </ul>
        
      </main>
    )
  }
  