import React from "react";
import "./coursesHome.css";
import courses from "../../images/courses.jpg";
import search from "../../images/search.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from '../../images/slide.jpg'
import image2 from '../../images/courses.jpg'
import '@splidejs/react-splide/css';

export const recomended = [
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
  {
    name: "Video Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
  },
];

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

function CoursesHome() {
  return (
    <div className="courses-home">
      <div className="slides">
      <Splide  tag="section" aria-labelledby="My Favorite Images" options={{
          type: 'loop',
          interval: '1000',
          autoplay: true,
          interval: 3000,
          speed: 1000,
          pauseOnHover: false,
          pauseOnFocus: true,
          width: '100%',
          keyboard: true,
        }}>
          <SplideSlide>
            <img style={{objectFit: "contain", width: "inherit"}} src={image} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img style={{objectFit: "contain", width: "inherit"}} src={image} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img style={{objectFit: "contain", width: "inherit"}} src={image} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img style={{objectFit: "contain", width: "inherit"}} src={image} alt="Image 2" />
          </SplideSlide>
        </Splide>
        <div className="btns">
            <button>Register</button>
            <button>Know More</button>
          </div>
      </div>

      <section className="upper-section">
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
      </section>
      <section className="main-div">
        <div className="section">
          <h2>Recommended for You</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
        <div className="section">
          <h2>Trending Now</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
        <div className="section">
          <h2>Team Picks</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
        <div className="categories-div">
        <h2>Explore by Category</h2>
        <Splide  tag="section" aria-labelledby="My Favorite Images" options={{
          interval: 1000,
          type: 'loop',
          speed: 1000,
          perPage: 3.5,
          width: '90%',
          flickPower: 1,
          gap: '10px',
          pagination: false,
          perMove: 1,
        }}>
          <SplideSlide>
            <img  src={image2} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img  src={image2} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img  src={image2} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img  src={image2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img  src={image2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img  src={image2} alt="Image 2" />
          </SplideSlide>
        </Splide>
        </div>
      </section>
    </div>
  );
}

export default CoursesHome;
