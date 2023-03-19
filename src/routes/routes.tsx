import ToDo from "../Components/ToDo/ToDo";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { NotFound } from "../pages/NotFound/NotFound";

export const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
