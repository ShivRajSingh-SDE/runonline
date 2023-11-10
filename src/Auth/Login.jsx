import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Back from "../components/common/back/Back";
import "./Login.css";
import Alert from "../components/Alert/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [pic, setPic] = useState("");

  // State for controlling the alert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
        name,
        pic,
        department,
      });

      if (response.data === "exist") {
        // Redirect to /header with email state
        navigate("/");
        setAlertMessage("Logged in successfully!");
        handleShowAlert();
        localStorage.setItem("userEmail", email);
      } else if (response.data === "not exist") {
        setAlertMessage("User not found or incorrect password");
        handleShowAlert();
        // navigate("/signup"); // Remove this line if not needed
      }
    } catch (error) {
      setAlertMessage("Wrong details");
      handleShowAlert();
      console.error(error);
    }
  }

  // Functions to show/hide the alert
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Function to handle the "Forgot Password" link click
  const handleForgotPassword = () => {
    navigate("/forgot");
  };

  return (
    <div className="p-10  drop-shadow-2xl shadow-2xl shadow-black">
      <Back title="Login" />

      <div className="login-container bg-[#86e5dee4] justify-center items-center flex flex-col p-5">
        <p className="login-title my-10 text-[30px]">Log In</p>
        <form onSubmit={submit}>
          <div className="form-group flex flex-col">
            <label htmlFor="LoggingEmailAddress">Email Address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              id="LoggingEmailAddress"
              className="login-input"
              type="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loggingPassword">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              id="loggingPassword"
              className="login-input"
              type="password"
            />
          </div>

          <div className="submit-button">
            <button type="submit" className="login-button">
              Submit
            </button>
          </div>
        </form>
        <div className="login-links ">
          <Link to="/signup" className="login-link mr-10">
            or sign up
          </Link>
          {/* Add a link/button for "Forgot Password" */}
          <div
            onClick={handleForgotPassword}
            className="login-link cursor-pointer"
          >
            Forgot Password
          </div>
        </div>
      </div>

      {/* Render the Alert component */}
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
    </div>
  );
};

export default Login;
