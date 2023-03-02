import React from "react";
import "./coursesHome.css";
import courses from "../../../images/courses.jpg";
import search from "../../../images/search.png";
import { recomended } from "../CourseIndex";


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
      <div className="main-div">
        <h2>Recommended for You</h2>
        <div className="recommended-div">
          {recomended.map((item, index)=>(
            <div className="card">
              <img src={item.thumbnail} alt="" />
              <div className="body">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div>
                  <p>Free plan</p>
                  <h5>Rating:{item.rating}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesHome;
