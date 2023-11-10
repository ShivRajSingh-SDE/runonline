import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(4, 7).map((val) => (
                <div className="items shadow-2xl border-gray-200 border-solid border-2 rounded-2xl hover:bg-[#00ffea28] duration-300 ease-in-out">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                            <div className="box">
                              <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="textline  text-white p-4 mt-5 bg-[#1eb2a6] hover:scale-105 ease-in-out duration-500">
                    <Link className="textline" to={val.reflink}>
                      START NOW !
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
