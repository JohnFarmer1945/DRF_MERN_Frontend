import { NavLink } from "react-router-dom";

import "../css/Footer.css";

function Footer() {
  return (
    <div className="d-flex justify-content-end ">
      <div>
        <NavLink className="nav-link myButton " to="/adminpage">
          <i class="bi bi-door-closed fa-xs"> Login</i>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
