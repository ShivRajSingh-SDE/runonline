import React, { useState, useEffect } from "react";
import axios from "axios";
import Back from "../common/back/Back";
import "./profile.css";
import Awrapper from "../about/Awrapper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [navmain, setNavMain] = useState(false);
  const userEmail = localStorage.getItem("userEmail");

  const handleResetClick = () => {
    // Clear the user's email from local storage
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserProfile(response.data.find((user) => user.email === userEmail));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userEmail]);

  return (
    <>
      <Back title="Profile" />
      <section className="team padding"></section>

      {userProfile ? (
        <div className="profile-card">
          <img id="userprofileimg" src={userProfile.pic} alt="User Profile" />
          <h2>{userProfile.name}</h2>
          <p>Email: {userProfile.email}</p>
          <div>
            <button onClick={handleResetClick}>LogOut</button>
          </div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Awrapper />
    </>
  );
};

export default Profile;
