import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Task Board</h1>
      <p>Manage your tasks easily.</p>
      <Link href="/tasks">View all tasks</Link>
    </main>
  );
}
