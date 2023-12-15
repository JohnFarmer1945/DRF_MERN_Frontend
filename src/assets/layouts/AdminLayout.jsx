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
      <Navbar />
      <ImageHeader />
      <NavbarAdmin />
      <p>Net ninja rouoter in depth breadcrumbs</p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
