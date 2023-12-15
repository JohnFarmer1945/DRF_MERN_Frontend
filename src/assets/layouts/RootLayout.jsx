import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CarouselHeader from "../components/CarouselHeader";

export default function RootLayout() {
  return (
    <>
      <CarouselHeader />
      <Navbar />
      <Outlet />
    </>
  );
}
