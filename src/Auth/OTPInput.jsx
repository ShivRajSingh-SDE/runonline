import React, { useState } from "react";
import PropTypes from "prop-types";

const OTPInput = ({ length, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Ensure input is a number
    if (/[^0-9]/.test(value)) {
      return;
    }

    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Join the OTP array into a single string and pass it to the parent component
    onChange(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      // Move focus to the previous input on Backspace
      document.getElementById(`otp-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      // Move focus to the next input on ArrowRight
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

OTPInput.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OTPInput;
