import React from "react";
import "./courses.css";
import { coursesCard2 } from "../../dummydata";

const CoursesCard2 = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard2.map((val) => (
            <div className="items" key={val.id}>
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
                      <div key={details.name}>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price"></div>
              <div
                className="outline-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a id="linkid" href={val.youtubeVideoURL}>
                  <div>START NOW !</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard2;
