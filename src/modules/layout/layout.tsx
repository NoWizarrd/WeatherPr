import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import {Outlet} from 'react-router-dom'


export default function Layout() {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  );
}
