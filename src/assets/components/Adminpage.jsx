import { NavLink } from "react-router-dom";

import AdminpageWhiteBoard from "./AdminpageWhiteBoard";

import { Route, Routes } from "react-router-dom";

function Adminpage() {
  return (
    <>
      <div className="container-fluid p-3 text-center">
        <Routes>
          <Route exact path="/" element={<AdminpageWhiteBoard />} />
        </Routes>
      </div>
    </>
  );
}

export default Adminpage;
