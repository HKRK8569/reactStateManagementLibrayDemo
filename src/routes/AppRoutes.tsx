import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Top from "../pages/Top";
import { PAGES } from "./Pages";
import Jotai from "../pages/Jotai";
import Zustand from "@/pages/Zustand";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: PAGES.TOP,
      element: <Top />,
    },
    {
      path: PAGES.JOTAI,
      element: <Jotai />,
    },
    {
      path: PAGES.ZUSTAND,
      element: <Zustand />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
