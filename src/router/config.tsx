
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Banks from "../pages/banks/page";
import SimCards from "../pages/sim-cards/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/banks",
    element: <Banks />,
  },
  {
    path: "/sim-cards",
    element: <SimCards />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
