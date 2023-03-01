import React from "react";
import "./sideMenu.css";
import search from "../../../images/search.png";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="side-menu">
      <h2>Menu</h2>
      <div className="search-bar">
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="menu-options">
        <Link to="/">
          <div className="courses-home">Courses Home</div>
        </Link>
        <hr />
        <h3>EXPLORE</h3>
        <Link to="recommended">
          <div className="courses-home">Recommended for You</div>
        </Link>
        <Link to="trending">
          <div className="courses-home">Trending Now</div>
        </Link>
        <Link to="team">
          <div className="courses-home">Team Picks</div>
        </Link>
        <hr />
        <h3>CATEGORIES</h3>
        <Link to="marketing">
          <div className="courses-home">Marketing</div>
        </Link>
        <Link to="sell">
          <div className="courses-home">Sell Online</div>
        </Link>
        <Link to="services">
          <div className="courses-home">Services & Events</div>
        </Link>
        <Link to="media">
          <div className="courses-home">Media & Content</div>
        </Link>
        <Link to="design">
          <div className="courses-home">Design Elements</div>
        </Link>
        <Link to="communication">
          <div className="courses-home">communication</div>
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
