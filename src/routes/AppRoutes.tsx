import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
