import React, { useState } from "react";
import Back from "../common/back/Back";
import Testcard from "./Testcard";
import Testcard2 from "./Testcard2";
import OnlineCourses from "../allcourses/OnlineCourses";
import { BsCapslock, } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const Test = () => {
      const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);
  const [cyberSecurityVisible2, setCyberSecurityVisible2] = useState(false);
    
    
  return (
          <>
      <Back title="Test & Assigment" />
      <h1
        className="tech "
        onClick={() => setCyberSecurityVisible2(!cyberSecurityVisible2)}
      >
        Notes<AiOutlineArrowDown className=" animate-bounce
        "/><hr></hr>
      </h1>

      {cyberSecurityVisible2 && <Testcard />}
      <br></br>
      <br></br>
      <br></br>

      <h1
        className="cyber"
        onClick={() => setCyberSecurityVisible(!cyberSecurityVisible)}
      >
        Assignment
        <AiOutlineArrowDown className=" animate-bounce"/>
        <hr></hr>
      </h1>

      {cyberSecurityVisible && <Testcard2 />}

          
      

      <OnlineCourses />
    </>
  )
}

export default Test