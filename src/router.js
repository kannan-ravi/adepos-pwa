import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Offers from "./pages/offers/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Find OR ERROR(DEMO)</div>,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
]);

export default router;
