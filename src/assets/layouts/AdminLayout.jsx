import React from "react";

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
      {/* <ImageHeader /> */}
      {/* <Navbar /> */}
      <NavbarAdmin />
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
