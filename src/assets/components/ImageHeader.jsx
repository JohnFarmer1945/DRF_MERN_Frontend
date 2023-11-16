import { Link } from "react-router-dom";

function ImageHeader() {
  return (
    <Link className="nav-link p-0 " to="/">
      <div
        id="div_head"
        className="container-fluid p-0 d-flex justify-content-center"
      >
        <img src="/images/3heli_less.png" />
      </div>
    </Link>
  );
}

export default ImageHeader;
