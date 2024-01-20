import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import CharacterListing from "./pages/Characters/Characters";
import Auth from "./pages/Auth/Auth";
import CharacterPage from "./pages/CharacterPage";
import Layout from "./pages/Layout/Layout";
import ComponentsPage from "./pages/Components/Components";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Auth />,
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
        element: <CharacterListing />,
      },
      {
        path: "*",
        loader: () => redirect("/"),
      },
    ],
  },
  {
    path: "/components/",
    element: <ComponentsPage />
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
