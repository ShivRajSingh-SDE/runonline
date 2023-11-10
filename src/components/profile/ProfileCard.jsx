import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  // Retrieve the email from local storage
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Find the user profile that matches the stored email
  useEffect(() => {
    if (userEmail) {
      const userProfile = users.find((user) => user.email === userEmail);
      setUserProfile(userProfile);
    }
  }, [users, userEmail]);

  return <div>{userProfile && <ProfileCard user={userProfile} />}</div>;
};

export default UserProfile;
