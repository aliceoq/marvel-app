import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
