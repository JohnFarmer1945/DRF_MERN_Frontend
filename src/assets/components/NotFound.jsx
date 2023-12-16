import { NavLink } from "react-router-dom";
import "../css/general.css";

function NotFound() {
  return (
    <>
      <div className="card shadow">
        <div className="card-header p- bg-light ">
          <h3 className="text-decoration-underline">Error 404</h3>
        </div>
        <div className="card-body">
          <h3>Sorry, the page you are searching for does not exist ...</h3>
          <NavLink to="/">Back to Startpage</NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFound;
