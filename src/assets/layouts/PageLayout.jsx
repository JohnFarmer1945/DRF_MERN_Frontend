import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageHeader from "../components/ImageHeader";

export default function RootLayout() {
  return (
    <>
      <ImageHeader />
      <Navbar />
      <Outlet />
    </>
  );
}
