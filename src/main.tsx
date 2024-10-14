import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./styles/reset.css";
import App from "./App.tsx";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import WorldPage from "./pages/WorldPage.tsx";
import ToolsPage from "./pages/ToolsPage.tsx";
import InteriorPage from "./pages/InteriorPage.tsx";
import PewPage from "./pages/PewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/world-editor" element={<WorldPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/pew" element={<PewPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
