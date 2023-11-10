import React from "react";
import "../allcourses/courses.css";
import {assigment} from "../../dummydata"

const Testcard2 = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {assigment.map((val) => (
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
                  <div className=" flex flex-row  gap-5 p-3">              <div
                className="outline-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a id="linkid" href={val.youtubeVideoURL}>
                  Hand Written !
                </a>
              </div>              <div
                className="outline-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a id="linkid" href={val.youtubeVideoURL}>
                  Online  !
                </a>
              </div></div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testcard2;
