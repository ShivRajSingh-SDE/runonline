import React, { useState } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import { BsCapslock } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const CourseHome = () => {
  const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);
  const [cyberSecurityVisible2, setCyberSecurityVisible2] = useState(false);

  return (
    <>
      <Back title="Explore Courses" />
      <h1 className="tech   border-b-2">Tech Section</h1>

      <div
        className=" flex flex-col  justify-center items-center  "
        onClick={() => setCyberSecurityVisible2(!cyberSecurityVisible2)}
      >
        <button
          className="
         drop-shadow-2xl
          shadow-2xl rounded-2xl border border-solid "
        >
          <h1 className=" text-[20px]">Click</h1>
          <AiOutlineArrowDown
            className=" animate-bounce
        "
          />
        </button>
      </div>

      <div
        className="flex flex-wrap justify-center items-center
      "
      >
        {cyberSecurityVisible2 && <CoursesCard />}
      </div>

      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <OnlineCourses />
    </>
  );
};

export default CourseHome;
