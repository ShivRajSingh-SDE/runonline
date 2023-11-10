import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Head = () => {
  const [click, setClick] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const userEmail = localStorage.getItem("userEmail");
  // Corrected variable name

  const handleResetClick = () => {
    localStorage.removeItem("userEmail");

    window.location.reload();
  };

  // Assuming that the /users endpoint returns an array of users
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const users = response.data;
        // Find the user with the matching email
        const foundUser = users.find((user) => user.email === userEmail);
        setUserProfile(foundUser); // setUserProfile(null) if not found
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userEmail]);

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <Link
              className="
             text-[40px] font-bold text-[white]"
              to="/"
            >
              AppTechTell
            </Link>
            <span></span>
          </div>

          <div className="social flex flex-row  justify-around items-center">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook-f icon"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>

            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter icon"></i>
            </a>

            <a href="https://www.youtube.com" target="_blank">
              <i className="fab fa-youtube icon"></i>
            </a>

            <a
              target="_blank"
              className=" hover:bg-white bg-[#1eb2a6] text-[white] hover:text-[#1eb2a6]  p-3 rounded-2xl ml-2 hover:scale-105 ease-in-out  duration-300"
              href="https://discord.gg/ju7nHjUR"
            >
              Query Room
            </a>

            {userProfile ? (
              <li
                onClick={handleResetClick}
                className="p-3 ml-2 rounded-2xl hover:bg-[#1eb2a6] hover:text-[white] bg-[#ffffff2f] border-2 m-1"
              >
                <Link className="subli" id="loginbtn" to="/signup">
                  Logout
                </Link>
              </li>
            ) : (
              <li className="p-3 ml-2 rounded-2xl hover:bg-[#1eb2a6] hover:text-[white] bg-[#ffffff2f] border-2 m-1">
                <Link className="subli" id="loginbtn" to="/signup">
                  Login
                </Link>
              </li>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
