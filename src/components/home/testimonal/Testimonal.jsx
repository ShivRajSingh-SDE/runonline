import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Management Team" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow-2xl  rounded-2xl drop-shadow-2xl shadow-[#1eb2a652]">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className={val.icon}></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
                <div
                  className="  justify-center items-center
                 flex "
                >
                  <a target="_blank" href={val.link}>
                    <button>Git-Link</button>
                  </a>
                  <a target="_blank" href={val.link2}>
                    <button>LinkedIn</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
