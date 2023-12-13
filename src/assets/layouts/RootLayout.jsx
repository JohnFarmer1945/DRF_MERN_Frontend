import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <p>He who walks behind</p>
      <Navbar />
      <Outlet />
    </>
  );
}
