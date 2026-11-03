import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Board",
  description: "Task management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/tasks">All tasks</Link>
          {" | "}
          <Link href="/tasks/1">Task 1</Link>
        </nav>

        {children}

        <footer>
          <a href="https://example.com/sponsor" rel="sponsored">
            Our sponsor
          </a>
          {" | "}
          <a href="https://example.org/planning-tips" rel="ugc">
            Tip from a user
          </a>
        </footer>
      </body>
    </html>
  );
}
