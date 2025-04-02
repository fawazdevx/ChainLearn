import React from "react";
import "../styles.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-filled" style={{ width: `${progress}%` }}></div>
      <span className="progress-label">{progress}% Complete</span>
    </div>
  );
}

export default ProgressBar;
