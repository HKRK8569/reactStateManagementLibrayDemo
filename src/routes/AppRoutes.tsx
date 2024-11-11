import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Top from "../pages/Top";
import { PAGES } from "./Pages";
import JotaiTodoList from "../pages/JotaiTodoList";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: PAGES.TOP,
      element: <Top />,
    },
    {
      path: PAGES.JOTAI,
      element: <JotaiTodoList />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
