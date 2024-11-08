import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Users from "../pages/Users/Users";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Users />,
      },
    ],
  },
]);
