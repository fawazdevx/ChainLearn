import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

function PythonCourse({ theme }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  // Simulated lessons & quiz data
  const totalLessons = 3;
  const totalQuizzes = 2;
  const [completedLessons, setCompletedLessons] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);

  // Simulate page loading (for progress bar effect)
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setPageLoading(false), 1000);
  }, []);

  // Calculate overall course progress as percentage
  const courseProgress = ((completedLessons + completedQuizzes) / (totalLessons + totalQuizzes)) * 100;

  // Sample steps data for installation
  const steps = [
    { step: 1, instruction: "Download and install Python.", command: "https://www.python.org/downloads/" },
    { step: 2, instruction: "Verify Python installation.", command: "python --version" },
    { step: 3, instruction: "Install pip.", command: "curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py" },
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
      {/* Page Load Progress Bar */}
      {pageLoading && <div className="loading-bar"></div>}

      <h1>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} className="course-detail-image" />
      <p>{course.description}</p>

      {/* Course Progress Bar */}
      <div className="progress-container">
        <label>Course Progress: {Math.round(courseProgress)}%</label>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${courseProgress}%` }}></div>
        </div>
      </div>

      <div className="course-introduction">
        <h2>Course Introduction</h2>
        <p>
          Welcome to the Python for Web3 Development course. In this course, you will learn how to leverage Python for blockchain and Web3 applications.
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
            <button className="copy-button" onClick={() => copyCommand(stepObj.command, stepObj.step)}>
              <FontAwesomeIcon icon={copiedStep === stepObj.step ? faCheck : faCopy} />
              {copiedStep === stepObj.step ? " Copied!" : " Copy"}
            </button>
            {/* Simulate Lesson Completion */}
            <button className="complete-button" onClick={() => setCompletedLessons((prev) => Math.min(prev + 1, totalLessons))}>
              ✅ Mark as Completed
            </button>
          </div>
        ))}
      </div>

      <div className="quiz-section">
        <h2>Quiz</h2>
        <button className="complete-button" onClick={() => setCompletedQuizzes((prev) => Math.min(prev + 1, totalQuizzes))}>
          ✅ Complete Quiz
        </button>
      </div>

      <button onClick={() => navigate("/courses")}>Back to Courses</button>
    </div>
  );
}

export default PythonCourse;
