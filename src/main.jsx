import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
