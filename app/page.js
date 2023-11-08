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
        <Link href="/week4" class="hover:text-sky-700">WEEK 4 PAGE</Link>
        <Link href="/week5" class="hover:text-sky-700">WEEK 5 PAGE</Link>
        <Link href="/week6" class="hover:text-sky-700">WEEK 6 PAGE</Link>
        <Link href="/week7" class="hover:text-sky-700">WEEK 7 PAGE</Link>
        <Link href="/week8" class="hover:text-sky-700">WEEK 8 PAGE</Link>
        <Link href="/week10" class="hover:text-sky-700">WEEK 10 PAGE</Link>
      </section>
      
    </main>
  )
}
