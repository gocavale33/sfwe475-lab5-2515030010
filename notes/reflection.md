# Lab 5 Reflection

## 1. Why is app/tasks/page.tsx a Server Component while TaskBoard is a Client Component?

The tasks page is a Server Component because it fetches and validates the task data before sending the page to the browser. TaskBoard is a Client Component because it uses useState, input changes, and click events to let the user add and update tasks.

## 2. How is View Source different from Lab 4?

In Next.js, the server can render task titles into the HTML before it reaches the browser. In the Lab 4 Vite application, the initial HTML mainly provides the React mount point, and the browser JavaScript renders the task content.

## 3. Why can /Tasks/Project_Plan be a problem?

The route contains uppercase letters and an underscore, which do not follow the worksheet's URL conventions. A clearer route is /tasks/project-plan.
