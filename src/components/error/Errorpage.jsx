import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className=" max-w-[1100px] mx-auto justify-center items-center flex flex-col">
      <div>
        <h1>Wrong Turn</h1>
      </div>

      <div>
        <Link to="/signup">
          <img src="https://en.ryte.com/magazine/wp-content/uploads/2017/10/Disney.png"></img>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
