import React from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function SideMenu() {
  return (
    <div className="side-menu" id="side-menu">
      <div className="min-menu" id="min-menu">
        <Link to="home">
          <span class="material-symbols-outlined">home</span>
          <p>Home</p>
        </Link>
        <Link to="courses">
          <span class="material-symbols-outlined">school</span>
          <p>Courses</p>
        </Link>
        <Link to="events">
          <span class="material-symbols-outlined">today</span>
          <p>Events</p>
        </Link>
        <Link to="history">
          <span class="material-symbols-outlined">history</span>
          <p>History</p>
        </Link>
      </div>
      <div className="menu-options disable" id="menu-options">
        <Link to="home">
          <span class="material-symbols-outlined">home</span>
          <div>Home</div>
        </Link>
        <Link to="courses">
          <span class="material-symbols-outlined">school</span>
          <div>Courses</div>
        </Link>
        <Link to="events">
          <span class="material-symbols-outlined">today</span>
          <div>Events</div>
        </Link>
        <Link to="History">
          <span class="material-symbols-outlined">history</span>
          <div>History</div>
        </Link>
        <hr />
        <h3>EXPLORE</h3>
        <HashLink to="/courses/#recommended" smooth>
          <span class="material-symbols-outlined">sort</span>
          <div>Recommended</div>
        </HashLink>
        <HashLink to="/courses/#trending" smooth>
          <span class="material-symbols-outlined">trending_up</span>
          <div>Trending Now</div>
        </HashLink>
        <HashLink to="/courses/#team" smooth>
        <span class="material-symbols-outlined">
diversity_3
</span>
          <div>Team Picks</div>
        </HashLink>
        <hr />
        <h3>CATEGORIES</h3>
        <Link to="marketing">
        <span class="material-symbols-outlined">
campaign
</span>
          <div>Marketing</div>
        </Link>
        <Link to="sell">
        <span class="material-symbols-outlined">
sell
</span>
          <div>Sell Online</div>
        </Link>
        <Link to="services">
        <span class="material-symbols-outlined">
prescriptions
</span>
          <div>Services & Events</div>
        </Link>
        <Link to="media">
        <span class="material-symbols-outlined">
perm_media
</span>
          <div>Media & Content</div>
        </Link>
        <Link to="design">
        <span class="material-symbols-outlined">
design_services
</span>
          <div>Design Elements</div>
        </Link>
        <Link to="communication">
        <span class="material-symbols-outlined">
hub
</span>
          <div>communication</div>
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
