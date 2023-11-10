import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="RoadMap" title="Browse Our Expert Made RoadMap" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                                    <a href={val.courselink}>
                    <span>click</span>

                    </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
