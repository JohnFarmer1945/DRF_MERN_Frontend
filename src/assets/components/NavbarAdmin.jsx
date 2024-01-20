import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../css/Navbar.css";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLockoutClick = () => {
    logout();
  };

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
        <div
          className="collapse navbar-collapse justify-content-right "
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex ms-auto ">
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {/* <span>{user.email} | </span> */}
                  <i
                    className="bi bi-box-arrow-right"
                    onClick={handleLockoutClick}
                  >
                    Logout
                  </i>
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <i className="bi bi-box-arrow-in-left">Login</i>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
