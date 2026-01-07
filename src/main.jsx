import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppWrapper from "./AppWrapper.jsx";
import HomePage from "./pages/HomePage.jsx";
import CertiPage from "./pages/CertiPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppWrapper>
        <HomePage />
      </AppWrapper>
    ),
  },
  {
    path: "/certificates",
    element: (
      <AppWrapper>
        <CertiPage />
      </AppWrapper>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
