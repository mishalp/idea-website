import React from "react";
import "./coursesHome.css";
import courses from "../../images/courses.jpg";
import search from "../../images/search.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../../images/slide.jpg";
import image2 from "../../images/courses.jpg";
import "@splidejs/react-splide/css";

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
  return (<>
          <div className="fixed">
        <button>Marketing</button>
        <button>Sell Online</button>
        <button>Services & Events</button>
        <button>Media Content</button>
        <button>Design Elements</button>
        <button>Communication</button>
        </div>
    <div className="courses-home">

      <div className="slides">
        <Splide
          tag="section"
          aria-labelledby="My Favorite Images"
          options={{
            type: "loop",
            interval: "1000",
            autoplay: true,
            interval: 3000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: true,
            keyboard: true,
            gap: "1rem",
            width: "100%",
          }}
        >
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 2"
            />
          </SplideSlide>
        </Splide>
        <div className="btns">
          <button>Register</button>
          <button>Know More</button>
        </div>
      </div>
      <section className="main-div">
        <div id="recommended" className="section">
          <h2>Recommended for You</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
        <div id="trending" className="section">
          <h2>Trending Now</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
        <div id="team" className="section">
          <h2>Team Picks</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default CoursesHome;
