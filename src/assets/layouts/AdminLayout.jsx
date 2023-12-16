import React from "react";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";

// Layouts
import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";

// components
import ImageHeader from "../components/ImageHeader";

// import CarouselHeader from "../components/CarouselHeader";

export default function RootLayout() {
  return (
    <>
      <ImageHeader />

      <NavbarAdmin />

      <h3 className="m-3 align-context-center">Adminpage:</h3>

      <Outlet />
    </>
  );
}
