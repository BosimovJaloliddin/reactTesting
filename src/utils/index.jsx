import Home from "../components/Home";
import Villa from "../components/OneHome";

export const pages = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    name: "News",
    path: "/news",
    element: <Villa />,
  },
];
