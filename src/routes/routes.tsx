import ToDo from "../Components/ToDo/ToDo";
import { CreateUserPage } from "../pages/CreateUserPage/CreateUserPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { MemoizationPage } from "../pages/MemoizationPage/MemoizationPage";
import { NotFound } from "../pages/NotFound/NotFound";

export const publicRoutes = [
  {
    path: "/memoization",
    element: <MemoizationPage />, 
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/createUser",
    element: <CreateUserPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/memoization",
    element: <MemoizationPage />, 
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
