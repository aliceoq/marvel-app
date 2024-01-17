import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
