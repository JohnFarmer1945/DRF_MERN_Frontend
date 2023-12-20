import React from "react";

import { Outlet } from "react-router-dom";

// Layouts
import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";

export default function RootLayout() {
  return (
    <>
      {/* <ImageHeader /> */}
      {/* <Navbar /> */}

      <NavbarAdmin />
      <Outlet />
    </>
  );
}
