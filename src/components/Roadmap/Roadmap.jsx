import React, { useState } from "react";
import Back from "../common/back/Back";

import Roadmapcor from "./Roadmapcor";
import Blog from "../blog/Blog";
import BlogCard from "../blog/BlogCard";

import "../blog/blog.css"
import Hblog from "../home/Hblog";




const Roadmap = () => {
      const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);
    const [cyberSecurityVisible2, setCyberSecurityVisible2] = useState(false);
    
  return (
    <>

      <Back title="RoadMap" />

      <Roadmapcor />

          <>
              <Hblog/>
    </>
    </>
  )
}

export default Roadmap