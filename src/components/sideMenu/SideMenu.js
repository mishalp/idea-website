import React from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="side-menu">
      <h2>IDEA</h2>
      <div className="menu-options">
        <Link to="home">
          <div>Home</div>
        </Link>
        <Link to="courses">
          <div>Courses</div>
        </Link>
        <Link to="events">
          <div>Events</div>
        </Link>
        <Link to="History">
          <div>History</div>
        </Link>
        <hr />
        <h3>EXPLORE</h3>
        <Link to="recommended">
          <div>Recommended for You</div>
        </Link>
        <Link to="trending">
          <div>Trending Now</div>
        </Link>
        <Link to="team">
          <div>Team Picks</div>
        </Link>
        <hr />
        <h3>CATEGORIES</h3>
        <Link to="marketing">
          <div>Marketing</div>
        </Link>
        <Link to="sell">
          <div>Sell Online</div>
        </Link>
        <Link to="services">
          <div>Services & Events</div>
        </Link>
        <Link to="media">
          <div>Media & Content</div>
        </Link>
        <Link to="design">
          <div>Design Elements</div>
        </Link>
        <Link to="communication">
          <div>communication</div>
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
