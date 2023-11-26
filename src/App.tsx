import React from "react";
import Layout from "./modules/layout/layout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main_page.tsx";
import MapPage from "./pages/Map_page.tsx";
import ListPage from "./pages/List_page.tsx";
import Content from "./modules/content/Content.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "list",
        element: <ListPage />,
      },
      {
        path: "map",
        element: <MapPage/>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
