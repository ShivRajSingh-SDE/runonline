import React from "react";
import { RoadMap } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Roadmapcor = () => {
  return (
    <>
      <section className="online">
        <div className="container my-10">
          <Heading subtitle="RoadMap" title="Browse Our Expert Made RoadMap" />
          <div className="content grid3">
            {RoadMap.map((val) => (
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

export default Roadmapcor;
