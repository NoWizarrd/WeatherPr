import React from "react";
import Layout from "./modules/layout/layout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main_page.tsx";
import MapPage from "./pages/Map_page.tsx";
import ListPage from "./pages/List_page.tsx";
import Content from "./modules/content/Content.tsx";
import QueryPage from "./pages/QueryPage.tsx";

import {store} from '../src/store/store.ts'
import { Provider } from "react-redux";
import ReduxPage from "./pages/ReduxPage.tsx";

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
        element: <MapPage />,
      },
      {
        path: "query",
        element: <QueryPage />,
      },
      {
        path: "redux",
        element: <ReduxPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
