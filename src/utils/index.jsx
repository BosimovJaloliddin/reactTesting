import Home from "../components/Home";
import Villa from "../components/OneHome";

export const houses = [
  {
    id: 1,
    name: "Home",
    pathname: "/",
    price: 123456,
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Home />,
    hidden: true,
  },
  {
    id: 2,
    name: "Webbrain Villa",
    pathname: "/Webbrain_Villa",
    price: 123456,
    urlImage: "/image/home.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
    child: true,
  },
  {
    id: 3,
    name: "Webbrain Cottage",
    pathname: "/Webbrain_Cottage",
    price: 123456,
    urlImage: "/image/home2.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 4,
    name: "Webbrain Yard",
    pathname: "/Webbrain_Yard",
    price: 123456,
    urlImage: "/image/home.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 5,
    name: "Webbrain Hall",
    pathname: "/Webbrain_Hall",
    price: 123456,
    urlImage: "/image/home2.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 6,
    name: "Webbrain City",
    pathname: "/Webbrain_City",
    price: 123456,
    urlImage: "/image/home.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 7,
    name: "Webbrain Villa2",
    pathname: "/Webbrain_Villa2",
    price: 123456,
    urlImage: "/image/home2.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 8,
    name: "Webbrain Market",
    pathname: "/Webbrain_Market",
    price: 123456,
    urlImage: "/image/home.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 9,
    name: "Webbrain Dalls",
    pathname: "/Webbrain_Dalls",
    price: 123456,
    urlImage: "/image/home2.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
  {
    id: 10,
    name: "Webbrain Villa3",
    pathname: "/Webbrain_Villa3",
    price: 123456,
    urlImage: "/image/home.png",
    details: { bed: 1, bath: 2, sq: 234 },
    element: <Villa />,
  },
];
