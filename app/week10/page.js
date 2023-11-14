"use client";

import { useUserAuth } from "./_utils/auth-context";
import { getShoppingList, addItem } from "./_services/shopping-list-service";
import Link from "next/link";

export default function Page() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if(user) {
        const items = getShoppingList(user.uid);
        console.log(items);
    }

    let newItem = {
        name: 'Onions',
        category: 'Produce',
        quantity: 4,
    }

async function handleSignIn() {
    try {
        await gitHubSignIn();
    } catch (error) {
        console.error(error);
    }
}

async function handleSignOut() {
    try {
        await firebaseSignOut();
        alert("Signed out!")
    } catch (error) {
        console.error(error);
    }
}

return (
    <div className="block mx-auto w-64 my-64">
        <h1 className="text-center">Login via Github</h1>
        {user ? (
            <div>
                <img src={user.photoURL} className="w-8 h-8" />
                Welcome, {user.displayName} {user.email}
                <button
                className="text-lg block mx-auto px-6 hover:underline bg-purple-300 rounded-md"
                onClick={handleSignOut}>Sign Out</button>
                <button onClick={ () => addItem(user.uid, newItem)}>Add Test Item</button>
                <section className="text-lg flex flex-col items-center p-12 bg-purple-300 mt-6">
                <h1 className="text-xl">PAGE LINKS</h1>
                <br/>
                <Link href="/week10/shopping-list" class="hover:text-sky-700 text-purple-950">SHOPPING LIST</Link>
            </section>
            </div>
            ) : (
                <button
                    className="text-lg block mx-auto px-6 hover:underline bg-purple-300 rounded-md"
                    onClick={handleSignIn}
                >
                    Sign in
                </button>
            )}
    </div>
    
)
}

