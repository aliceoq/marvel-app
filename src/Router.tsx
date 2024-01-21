import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import CharacterPage from "./pages/Character/CharacterPage";
import Layout from "./pages/Layout/Layout";
import ComponentsPage from "./pages/Components/Components";
import ListingPage from "./pages/Listing/ListingPage";
import ComicPage from "./pages/Comic/ComicPage";
import CreatorPage from "./pages/Creator/CreatorPage";
import { useSelector } from "react-redux";
import AuthWrapper from "./pages/AuthWrapper/AuthWrapper";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Auth />,
      },
      {
        element: <AuthWrapper />,
        children: [
          {
            path: "/characters/page/:page",
            element: <ListingPage path={"characters"} endpoint={"characters"} name={"personagens"} />
          },
          {
            path: "/characters/:id",
            element: <CharacterPage />,
          },
          {
            path: "/characters/",
            element: <ListingPage path={"characters"} endpoint={"characters"} name={"personagens"} />
          },
          {
            path: "/comics",
            element: <ListingPage path={"comics"} endpoint={"comics"} name={"quadrinhos"} />
          },
          {
            path: "/comics/page/:page",
            element: <ListingPage path={"comics"} endpoint={"comics"} name={"quadrinhos"} />
          },
          {
            path: "/comics/:id",
            element: <ComicPage />,
          },
          {
            path: "/creators",
            element: <ListingPage path={"creators"} endpoint={"creators"} name={"criadores"} />
          },
          {
            path: "/creators/page/:page",
            element: <ListingPage path={"creators"} endpoint={"creators"} name={"criadores"} />
          },
          {
            path: "/creators/:id",
            element: <CreatorPage />,
          },
        ]
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
