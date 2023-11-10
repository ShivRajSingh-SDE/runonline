import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Back from "../components/common/back/Back";
import "./Login.css";
import Alert from "../components/Alert/Alert";
import OTPInput from "./OTPInput";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [otp, setOTP] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [otpSubmitted, setOTPSubmitted] = useState(false);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleGetOTP = async () => {
    try {
      // Only send OTP if it hasn't been submitted yet
      if (!otpSubmitted) {
        const response = await axios.post(
          "http://localhost:8000/generate-otp",
          {
            email,
          }
        );

        console.log("Response from /generate-otp:", response.data);

        if (response.data === "OTP sent successfully") {
          const generatedOTP = generateOTP();
          setOTP(generatedOTP);
          setEmailSubmitted(true);
          setAlertMessage("OTP sent successfully!");
          handleShowAlert();
        } else {
          setAlertMessage("Failed to send OTP");
          handleShowAlert();
        }
      }
    } catch (error) {
      setAlertMessage("An error occurred");
      handleShowAlert();
      console.error("Error in handleGetOTP:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Only submit OTP if it hasn't been submitted yet and the email has been submitted
      if (!otpSubmitted && emailSubmitted) {
        const response = await axios.post(
          "http://localhost:8000/reset-password",
          {
            email,
            password,
            confirmPassword,
            otp,
          }
        );

        console.log("Response from /reset-password:", response.data);

        if (response.data === "success") {
          setAlertMessage("Password reset successful");
          handleShowAlert();
          setOTPSubmitted(true);
        } else {
          setAlertMessage("Failed to reset password");
          handleShowAlert();
        }
      }
    } catch (error) {
      setAlertMessage("An error occurred");
      handleShowAlert();
      console.error("Error in handleSubmit:", error);
    }
  };

  const submitEmail = async (e) => {
    // Implement your logic for submitting email if needed
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-10  drop-shadow-2xl shadow-2xl shadow-black">
      <Back title="Forgot Password" />

      <div className="login-container bg-[#86e5dee4] justify-center items-center flex flex-col p-5">
        <p className="login-title my-10 text-[30px]">Forgot</p>
        {!otpSubmitted ? (
          <form onSubmit={emailSubmitted ? handleSubmit : submitEmail}>
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
            <div className="form-group">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm Password"
                id="ConfirmPassword"
                className="login-input"
                type="password"
              />
            </div>

            {emailSubmitted && (
              <div className="form-group">
                <label htmlFor="otp flex flex-row">Enter OTP</label>
                <OTPInput length={6} onChange={(value) => setOTP(value)} />
              </div>
            )}

            <div className="div flex flex-row">
              {!emailSubmitted ? (
                <button
                  type="button"
                  onClick={handleGetOTP}
                  className="login-button"
                >
                  Get OTP
                </button>
              ) : (
                <button type="submit" className="login-button">
                  Submit
                </button>
              )}
            </div>
          </form>
        ) : (
          <div>
            <p>OTP submitted successfully!</p>
          </div>
        )}
        <div className="login-links ">
          <Link to="/login" className="login-link mr-10">
            Back to Login
          </Link>
        </div>
      </div>

      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
    </div>
  );
};

export default Forgot;
