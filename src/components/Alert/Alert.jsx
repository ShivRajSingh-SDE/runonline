import React, { useState } from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alert;
