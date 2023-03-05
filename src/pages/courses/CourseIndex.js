import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu/SideMenu";
import "./coursesIndex.css";
import courses from "../../images/courses.jpg";

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


function CoursesIndex() {
  return (
    <div className="courses-index">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default CoursesIndex;
