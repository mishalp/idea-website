import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3>I.D.E.A</h3>
      <div className="menu">
          <Link to="home">
            <div className="link">
                Home
            </div>
          </Link>
          <Link to="courses">
            <div className="link">
                Courses
            </div>
          </Link>
          <Link to="events">
            <div className="link">
                Events
            </div>
          </Link>
      </div>
    </div>
  );
}

export default Navbar;
