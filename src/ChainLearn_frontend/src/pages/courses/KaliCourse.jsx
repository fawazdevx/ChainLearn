import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles.css";

function PythonCourse() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  if (!course) {
    return (
      <div className="course-detail-container">
        <h1>No Course Selected</h1>
        <button onClick={() => navigate("/courses")}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} className="course-detail-image" />
      <p>{course.description}</p>
      <p>
        Access full course materials here:{" "}
        <a href={course.textUrl} target="_blank" rel="noopener noreferrer">
          Course Materials
        </a>
      </p>
      <button onClick={() => navigate("/courses")}>Back to Courses</button>
    </div>
  );
}

export default PythonCourse;
