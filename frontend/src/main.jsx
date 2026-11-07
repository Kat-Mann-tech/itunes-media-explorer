import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import SearchPage from "./pages/SearchPage";
import FavouritesPage from "./pages/FavouritesPage";

// App component
import App from "./App";

// Application routes
const router = createBrowserRouter([
  {
    path: "/",

    // App becomes the parent component
    element: <App />,

    // Child pages render inside the Outlet
    children: [

      // Homepage
      {
        index: true,
        element: <SearchPage />,
      },

      // Favourites page
      {
        path: "favourites",
        element: <FavouritesPage />,
      },

    ],
  },
]);

// Render application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);