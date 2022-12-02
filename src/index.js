import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Details from "./routes/Details";
import "./css/index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Movie from "./routes/Movie";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL + "/"}`,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "movies",
    element: <Movie />,
  },
  {
    path: "movies/:id",
    element: <Details />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
