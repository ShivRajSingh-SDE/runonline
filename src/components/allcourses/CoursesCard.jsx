import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  return (
    <>
      {coursesCard.map((val) => (
        <div
          className="shadow-2xl border border-solid shadow-emerald-200 border-gray-500 bg-[#317e7e28] drop-shadow-2xl my-5 p-2 m-5 rounded-2xl hover:scale-105 hover:bg-[#00ffea28] duration-300 ease-in-out"
          key="1"
        >
          <div className="content flex flex-col justify-center items-center  w-[50vh]">
            <div className=" m-2">
              <div className="img">
                <img className=" h-[13vh] rounded-2xl" src={val.cover} alt="" />
              </div>
            </div>
            <div className="text justify-center items-center flex flex-col">
              <div className=" flex">
                <h1 className=" flex p-2">{val.coursesName} </h1>
              </div>

              <div className="details">
                {val.courTeacher.map((details) => (
                  <div key="1">
                    <div className=" flex justify-between flex-row my-5">
                      <div className="dimg mr-4">
                        <img className="h-[5vh]" src={details.dcover} alt="" />
                      </div>
                      <div className="para">
                        <h4>{details.name}</h4>

                        <span>{details.totalTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <label htmlFor="">(5.0)</label>
              </div>
            </div>
          </div>

          <div className="  justify-around flex-warp my-3 flex ">
            <a target="_blank" href="">
              <button
                className="
                   hover:bg-[#00e1ff3b]"
              >
                About
              </button>
            </a>
            <a target="_blank" href="">
              <button
                className="
                   hover:bg-[#00e1ff3b]"
              >
                Road Map
              </button>
            </a>
            <a target="_blank" href="">
              <button
                className="
                   hover:bg-[#00e1ff3b]"
              >
                Other
              </button>
            </a>
          </div>
          <a target="_blank" id="linkid" href={val.youtubeVideoURL}>
            <div
              className="outline-btn justify-center
             items-center flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              START NOW !
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default CoursesCard;
