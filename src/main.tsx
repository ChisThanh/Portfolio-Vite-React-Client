import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/home.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./routes/summary.tsx";
import Projects from "./routes/projects.tsx";
import ProjectItem from "./routes/project-item.tsx";
import Certificate from "./routes/certificate.tsx";
import LayoutApp from "./layouts/LayoutApp.tsx";
import { LayoutProvider } from "./hooks/LayoutProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: <ProjectItem />,
      },
      {
        path: "certificate",
        element: <Certificate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </StrictMode>
);
