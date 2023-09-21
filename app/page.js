import Image from 'next/image'
import Link from "next/link";
import StudentInfo from "app/StudentInfo.js"

export default function Home() {
  return (
    <main>
      <header className="text-xl flex flex-col items-center justify-between p-8">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      </header>
      
      <section className="text-lg flex flex-col items-center p-12 bg-yellow-400">
        <h1>PAGE LINKS</h1>
        <br/>
        <Link href="/week2" class="hover:text-sky-700">WEEK 2 PAGE</Link>
        <Link href="/week3" class="hover:text-sky-700">WEEK 3 PAGE</Link>
      </section>
      
    </main>
  )
}
