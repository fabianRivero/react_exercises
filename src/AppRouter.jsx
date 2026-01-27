import Home from "./Home";
import Ejercicio1 from "./ejercicio1/Ejercicio1";
import Ejercicio2 from "./ejercicio2/Ejercicio2";
import Ejercicio3 from "./ejercicio3/Ejercicio3";
import Ejercicio4 from "./ejercicio4/Ejercicio4";
import Ejercicio5 from "./ejercicio5/Ejercicio5";
import Ejercicio6 from "./ejercicio6/Ejercicio6";
import Ejercicio7 from "./ejercicio7/Ejercicio7";
import Ejercicio8 from "./ejercicio8/Ejercicio8";
import Ejercicio9 from "./ejercicio9/Ejercicio9";
import { useRoutes } from "react-router-dom";
import Header from "./header/Header";

export function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Header><Home /></Header> },
    { path: "/ejercicio-1", element: <Header><Ejercicio1 /></Header> },
    { path: "/ejercicio-2", element: <Header><Ejercicio2 /></Header> },
    { path: "/ejercicio-3", element: <Header><Ejercicio3 /></Header> },
    { path: "/ejercicio-4", element: <Header><Ejercicio4 /></Header> },
    { path: "/ejercicio-5", element: <Header><Ejercicio5 /></Header> },
    { path: "/ejercicio-6", element: <Header><Ejercicio6 /></Header> },
    { path: "/ejercicio-7", element: <Header><Ejercicio7 /></Header> },
    { path: "/ejercicio-8", element: <Header><Ejercicio8 /></Header> },
    { path: "/ejercicio-9", element: <Header><Ejercicio9 /></Header> },
  ]);

  return routes;
}