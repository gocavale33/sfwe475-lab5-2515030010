"use client";

import { useState } from "react";
import type { Task } from "@/lib/schemas";

export default function TaskBoard({
  initialTasks,
}: {
  initialTasks: Task[];
}) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTitle, setNewTitle] = useState("");

  function addTask() {
    const title = newTitle.trim();
    if (!title) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        done: false,
      },
    ]);

    setNewTitle("");
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <main>
      <h1>My Task Board</h1>

      <div className="new-task-input">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Add a task..."
          aria-label="New task title"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first one below.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.title}</h3>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                {task.done ? "Done" : "Not done yet"}
              </label>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
