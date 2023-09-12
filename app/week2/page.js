import StudentInfo from "app/StudentInfo.js"

export default function Home() {
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <h1>My Shopping List</h1>
        <StudentInfo />
      </main>
    )
  }
  