import { createBrowserRouter } from "react-router-dom";

import { Home, Welcome, NotFound, Single, Search } from "@pages";
import { HomeLayout } from "@layouts";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Welcome />,
    errorElement: <NotFound />,
  },
  {
    path: "/videogames",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <Single />
      },
      {
        path: "name",
        element: <Search />
      }
    ]
  },
])
