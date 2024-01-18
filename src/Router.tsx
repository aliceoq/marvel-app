import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import CharacterListing from "./pages/CharacterListing";
import Home from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters/page/:page",
    element: <CharacterListing />,
  },
  {
    path: "/characters/:id",
    element: <CharacterPage />,
  },
  {
    path: "/characters/",
    element: <CharacterListing />
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
