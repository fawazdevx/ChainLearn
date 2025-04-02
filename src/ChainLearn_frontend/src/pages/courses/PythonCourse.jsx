import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../styles.css";

function PythonCourse({ theme, toggleTheme }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  // Sample steps data
  const steps = [
    {
      step: 1,
      instruction: "Download and install Python from the official website.",
      command: "https://www.python.org/downloads/",
    },
    {
      step: 2,
      instruction: "Verify Python installation in your terminal.",
      command: "python --version",
    },
    {
      step: 3,
      instruction: "Install pip (if not installed).",
      command: "curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py",
    },
  ];

  const [copiedStep, setCopiedStep] = useState(null);

  const copyCommand = (command, step) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopiedStep(step);
      setTimeout(() => setCopiedStep(null), 2000);
    });
  };

  if (!course) {
    return (
      <div className="course-detail-container">
        <h1>No Course Selected</h1>
        <button onClick={() => navigate("/courses")}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className={`course-detail-container ${theme}`}>
      <h1>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} className="course-detail-image" />
      <p>{course.description}</p>
      
      <div className="course-introduction">
        <h2>Course Introduction</h2>
        <p>
          Welcome to the Python for Web3 Development course. In this course, you will learn
          how to leverage Python in building blockchain and Web3 applications.
        </p>
      </div>

      <div className="course-steps">
        <h2>Installation Steps</h2>
        {steps.map((stepObj) => (
          <div key={stepObj.step} className="course-step">
            <p>
              <strong>Step {stepObj.step}:</strong> {stepObj.instruction}
            </p>
            <pre className="command-box">{stepObj.command}</pre>
            <button onClick={() => copyCommand(stepObj.command, stepObj.step)}>
              {copiedStep === stepObj.step ? "Copied!" : "Copy Command"}
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/courses")}>Back to Courses</button>
    </div>
  );
}

export default PythonCourse;
