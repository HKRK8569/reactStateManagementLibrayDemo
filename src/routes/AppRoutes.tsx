import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Top from "../pages/Top";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Top />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
