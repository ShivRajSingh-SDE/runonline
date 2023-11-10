import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Head from "./Head";
import "./header.css";
import axios from "axios";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  const [click, setClick] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [navmain, setNavMain] = useState(false);

  // Retrieve the email from local storage
  const userEmail = localStorage.getItem("userEmail");

  // Access the history object
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch all users for the UserProfile component
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserProfile(response.data.find((user) => user.email === userEmail));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Check if the user is not signed in and is trying to access a restricted page
    if (
      !userEmail &&
      [
        "/about",
        "/",
        "/courses",
        "/test&notes",
        "/roadmap",
        "/chatbot",
        "/news",
        "/profile",
      ].includes(location.pathname)
    ) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [userEmail, location.pathname, navigate]);

  const toggleNav = () => {
    setNavMain(!navmain);
  };

  const handleResetClick = () => {
    // Clear the user's email from local storage
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className="flex flex-row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/test&notes">Test & Assigment</Link>
            </li>
            <li>
              <Link to="/roadmap">RoadMap</Link>
            </li>

            <li
              onClick={toggleNav}
              className=" rounded relative flex flex-col items-center text-[white] border"
            >
              More <AiFillCaretDown className=" animate-bounce" />
              {navmain && (
                <div onClick={toggleNav} className="">
                  <ul
                    onClick={toggleNav}
                    className="bg-[#00000083]  rounded-2xl absolute"
                  >
                    <li className="p-1 bg-[#ffffff2f] border-2 m-1">
                      <Link onClick={toggleNav} className="subli" to="/chatbot">
                        QueryHelpDesk
                      </Link>
                    </li>
                    <li className="p-1 bg-[#ffffff2f] border-2 m-1">
                      <Link onClick={toggleNav} className="subli" to="/news">
                        News
                      </Link>
                    </li>
                    <li className="p-1 bg-[#ffffff2f] border-2 m-1">
                      <Link onClick={toggleNav} className="subli" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="p-1 bg-[#ffffff2f] border-2 m-1">
                      <Link
                        onClick={toggleNav}
                        className="subli"
                        id="loginbtn"
                        to="/signup"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div className="start">
            {userProfile && userProfile.pic && (
              <img
                id="userprofileimg2"
                src={userProfile.pic}
                alt="User Profile"
              />
            )}
            {userProfile && <h2>{userProfile.name}</h2>}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
