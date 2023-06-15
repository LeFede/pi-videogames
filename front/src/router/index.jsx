import { createBrowserRouter } from "react-router-dom";

import { Home, Welcome, NotFound, Single } from "@pages";
import { HomeLayout } from "@layouts";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Welcome />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "single/:id",
        element: <Single />
      },
    ]
  },
])
