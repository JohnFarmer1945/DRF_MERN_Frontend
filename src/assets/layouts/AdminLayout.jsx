import React from "react";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
// import CarouselHeader from "../components/CarouselHeader";

export default function RootLayout() {
  return (
    <>
      <br />
      <NavbarAdmin />

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
