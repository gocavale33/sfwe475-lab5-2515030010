# Next.js Lab 5 Notes

## 1. Routing

| File | URL |
|---|---|
| app/page.tsx | / |
| app/tasks/page.tsx | /tasks |
| app/tasks/[id]/page.tsx | /tasks/1 (dynamic route) |

The home page uses Next.js Link to navigate to the tasks page.
The dynamic route reads the id from params. The id is a string.

## 2. URL predictions

- app/tasks/page.tsx maps to /tasks.
- app/tasks/[id]/page.tsx maps to /tasks/1 or another task id.
- A singular /task route is different from /tasks.
- URLs should use HTTPS when deployed.
- URLs should be short and readable.
- Use lowercase letters.
- Use hyphens instead of underscores.
- Avoid unnecessary query parameters.

Example: /tasks/project-plan

## 3. Server and Client Components

| File | Component type | Reason |
|---|---|---|
| app/layout.tsx | Server | Provides the shared page layout and navigation. |
| app/page.tsx | Server | Displays the home page without browser state. |
| app/tasks/page.tsx | Server | Fetches and validates task data. |
| app/tasks/TaskBoard.tsx | Client | Uses useState and browser events for task interactions. |
| app/tasks/[id]/page.tsx | Server | Reads the route parameter and displays it. |

TaskBoard needs "use client" because it uses state and event handlers.
The task data is fetched on the server and passed to TaskBoard as initialTasks.

The original Lab 4 folder did not contain mockApi.ts, FilterBar.tsx, or NewTaskForm.tsx. A compatible mock API was created for this migration, and the task board interactions were kept in TaskBoard.

## 4. Server rendering

The tasks page fetches tasks before rendering the page.
The server log reports typeof window as undefined because the page runs on the server.

Next.js can include rendered task titles in the HTML source.
In a typical Vite client-rendered application, the initial HTML mainly contains the React mount element; JavaScript renders the task content in the browser.

## 5. Layout and links

The root layout contains navigation above the page content and a footer below it.
Next.js Link is used for internal navigation.
The footer uses rel="sponsored" for a sponsored link and rel="ugc" for user-generated content.

## 6. Rendering strategy

A shared public task page can use server rendering for useful HTML and search indexing.
A highly interactive drag-and-drop board is a good use case for client-side interaction.
A mostly static About page can be generated ahead of time.

## 7. Metadata

The tasks page has a title, description, and canonical URL:
- Title: All tasks | Task Board
- Description: Every task on your board, in one place.
- Canonical: https://taskboard.example/tasks
