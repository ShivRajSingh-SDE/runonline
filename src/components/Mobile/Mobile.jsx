import React from "react";

const Mobile = () => {
  return (
    <div className="max-w-[1100px]  mx-auto justify-center items-center flex flex-col">
      <div>
        <h1>
          This site is only accessible on PC. Please visit from a computer.
        </h1>
      </div>
      <div>
        <img
          className=" h-[60vh] w-[80]"
          src="https://image.lexica.art/full_jpg/fb689348-f828-42ec-8d5e-de6e8dc34b0d"
        ></img>
      </div>
    </div>
  );
};

export default Mobile;
