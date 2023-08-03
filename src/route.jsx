import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import Root from "./pages/root";
import { About } from "./pages/about";
import { Work } from "./pages/works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "works",
        element: <Work />,
      },
    ],
  },
]);
export function Route() {
  return <RouterProvider router={router} />;
}
