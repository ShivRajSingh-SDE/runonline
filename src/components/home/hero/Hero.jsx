import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../../common/heading/Heading";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ userEmail }) => {
  const [userDepartment, setUserDepartment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8000/user/${userEmail}`)
        .then((response) => {
          const { department } = response.data;
          console.log("Department from API:", department);
          setUserDepartment(department);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userEmail]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const clubName = userDepartment === "CSA" ? "AppTechTell" : "Byte Benders";

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle={`WELCOME TO ${clubName}`}
              title="Empowering Future Enabling Dreams"
            />

            <div id="button" className="button">
              <Link id="button" to="/courses">
                <button id="button" className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
