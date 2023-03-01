import React from "react";
import "./coursesHome.css";
import courses from "../../../images/courses.jpg";
import search from "../../../images/search.png";


function CoursesHome() {
  return (
    <div className="courses-home">
      <div className="upper-section">
        <div className="left">
          <h2>Choose Professional Solutions to Power Your Wix Website</h2>
          <div className="search-bar">
            <img src={search} alt="" />
            <div className="input-div">
            <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="right">
          <img src={courses} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CoursesHome;
