import { NavLink } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md p-0" id="sidebar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex justifiy-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Start
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/Team">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/Technik">
                Technik
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/Umgebung">
                Umgebung
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/ToDos">
                ToDos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/MoreToDos">
                MoreToDos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/EmergencyAndProcedure">
                Emergency & Procedure
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-right "
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminpage">
                <i class="bi bi-door-closed"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
