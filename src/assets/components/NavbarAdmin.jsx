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
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex ">
            <li className="nav-item adminpage">
              <NavLink className="nav-link" to="/adminpage">
                Adminpage
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminpage/Whiteboard">
                Whiteboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminpage/MedQuestions">
                MedQuestions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminpage/Flightquestions">
                FlightQuestions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminpage/WeekTasks">
                WeekTasks
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
