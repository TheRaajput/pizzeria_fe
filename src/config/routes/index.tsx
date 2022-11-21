import Admin from "../../pages/admin";
import Home from "../../pages/home";
import LogIn from "../../pages/logIn";
import OrderHome from "../../pages/Orders";
import Register from "../../pages/register";
import VerifyPassword from "../../pages/verifyPassword";

export const appRoutes = [
  {
    id: "home",
    path: "/",
    component: <Home />,
    isProtected: true,
  },
  {
    id: "login",
    path: "/login",
    component: <LogIn />,
  },
  {
    id: "signUp",
    path: "/register",
    component: <Register />,
  },
  {
    id: "verifyPassword",
    path: "/verify-password",
    component: <VerifyPassword />,
  },
  {
    id: "admin",
    path: "/dashboard/:panel",
    component: <Admin />,
  },
  {
    id: "orders",
    path: "/orders",
    component: <OrderHome />,
  },
];
