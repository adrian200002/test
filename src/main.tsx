import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./styles/reset.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import WorldPage from "./pages/WorldPage.tsx";
import ToolsPage from "./pages/ToolsPage.tsx";
import InteriorPage from "./pages/InteriorPage.tsx";
import PewPage from "./pages/PewPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/world-editor",
        element: <WorldPage />,
      },
      {
        path: "/tools",
        element: <ToolsPage />,
      },
      {
        path: "/interior",
        element: <InteriorPage />,
      },
      {
        path: "/pew",
        element: <PewPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
