import Image from 'next/image'
import Link from "next/link";
import StudentInfo from "app/StudentInfo.js"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2">WEEK 2 PAGE</Link>
    </main>
  )
}
