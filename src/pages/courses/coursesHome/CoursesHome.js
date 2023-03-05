import React, { useState } from "react";
import "./coursesHome.css";
import courses from "../../../images/courses.jpg";
import search from "../../../images/search.png";
import { recomended } from "../CourseIndex";
import { Link } from "react-router-dom";

const CardBuilder = ({ arr, limit }) => (
  <>
    {arr.map((item, index) => {
      if (limit != null && index >= limit) return;
      return (
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
      );
    })}
  </>
);

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const width = (window.innerWidth - 228 - 80 - 17 - 30 - 20 - 20) / 2; //side menu width, padding 40x2, rounding, padding 15x2, padding 10x2, margin 10x2
  const click = slides.length - parseInt(width / 194) + 1; // 170 is the image width
  //calculating how many clicks to go throgh all the slides
  console.log(width);

  const prev = () => setCurr(curr === 0 ? click -1 : curr - 1);
  const next = () => setCurr(curr === click - 1 ? 0 : curr + 1);
  return (
    <>
      <div className="carousel">
        <div
          className="slides"
          style={{ transform: `translateX(-${curr * 205}px)` }}
        >
          {slides}
        </div>
      </div>
      <div className="btn">
          <span onClick={prev} class="material-symbols-outlined">arrow_back_ios</span>

          <span onClick={next} class="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <div className="indicator-div">
          {(()=>{
            const component = []
            for(let i = 0; i < click; i++){
            component.push(<div style={{backgroundColor: curr === i? "#0000de": ""}} className="indicator"> </div>)
          }
          return component
          })()}
      </div>
    </>
  );
}

function CoursesHome() {
  const slides = [courses, courses, courses, courses, courses, courses];
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
        <div className="card-container-div">
          <CardBuilder arr={recomended} limit={4} />
        </div>
        <Link className="view-more" to="/courses/recommended">
          View More
        </Link>
        <h2>Trending Now</h2>
        <div className="card-container-div">
          <CardBuilder arr={recomended} limit={4} />
        </div>
        <Link className="view-more" to="/courses/trending">
          View More
        </Link>
        <h2>Team Picks</h2>
        <div className="card-container-div">
          <CardBuilder arr={recomended} limit={8} />
        </div>
        <Link className="view-more" to="/courses/team">
          View More
        </Link>
        <h2>Explore by Category</h2>
        <div className="categories-div">
          <Carousel>
            {slides.map((src) => (
              <div className="slide">
                <h3>Category</h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CoursesHome;
