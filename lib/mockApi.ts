import type { Task } from "./schemas";

const tasks: Task[] = [
  { id: 1, title: "Read Chapter 3", done: false },
  { id: 2, title: "Build TaskCard", done: true },
  { id: 3, title: "Complete Next.js Lab", done: false },
];

export async function simulateFetchTasks(options?: {
  delayMs?: number;
}) {
  const delay = options?.delayMs ?? 300;

  await new Promise((resolve) => setTimeout(resolve, delay));

  return tasks;
}
