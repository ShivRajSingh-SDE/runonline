import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import img from "./gitam1.jpg";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img
              className="aboutimg"
              src="https://image.lexica.art/full_jpg/e522a8d6-4bec-4dff-aacf-8f0e6f8f1080"
              alt=""
            />
          </div>
          <div className="right row">
            <Heading
              subtitle="KEEP LEARNING"
              title="Benefits About AppTechTell Online Learning."
            />
            <div className="items">
              {homeAbout.map((val) => (
                <Link to={val.link} key={val.title}>
                  <div className="item flexSB justify-between items-center flex rounded-2xl">
                    <div className="img m-2">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
