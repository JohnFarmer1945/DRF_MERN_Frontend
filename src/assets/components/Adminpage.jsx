import { NavLink } from "react-router-dom";

import AdminpageWhiteBoard from "./AdminpageWhiteBoard";

import { Route, Routes } from "react-router-dom";

function Adminpage() {
  return (
    <>
      <NavLink className="nav-link" to="/adminpage/">
        WhiteBoard
      </NavLink>
      <NavLink className="nav-link" to="/Technik">
        Technik
      </NavLink>
      <div className="container-fluid p-3 text-center">
        <Routes>
          <Route exact path="/" element={<AdminpageWhiteBoard />} />
        </Routes>
      </div>
    </>
  );
}

export default Adminpage;
