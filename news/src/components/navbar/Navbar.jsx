import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar col-12 shadow-sm d-flex align-items-center">
        <span
          className="fs-4 text-capitalize ps-3 ps-md-5 heading"
          onClick={() => navigate("/")}
        >
          news portal
        </span>
      </nav>
    </>
  );
}

export default Navbar;
