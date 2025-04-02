import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPython, FaUnity, FaShieldAlt } from "react-icons/fa";
import "../../styles.css";

const courses = [
  {
    title: "Python for Web3 Development",
    textUrl: "https://ipfs.io/ipfs/QmTextExamplePython",
    imageUrl: "https://cloudflare-ipfs.com/ipfs/QmNnqnzSLjnPmE8eksSgu7L3oRFBjLDN88nC6PkbfB6Tav",
    description: "Learn Python fundamentals tailored for blockchain and Web3.",
    courseId: "python",
    icon: <FaPython size={24} color="#ffdf5a" />,
  },
  {
    title: "Unity Game Development Bootcamp",
    textUrl: "https://ipfs.io/ipfs/QmTextExampleUnity",
    imageUrl: "https://cloudflare-ipfs.com/ipfs/QmNnqnzSLjnPmE8eksSgu7L3oRFBjLDN88nC6PkbfB6Tav",
    description: "Master game development with Unity from scratch.",
    courseId: "unity",
    icon: <FaUnity size={24} color="#ccc" />,
  },
  {
    title: "Cyber Defense with Kali Linux",
    textUrl: "https://ipfs.io/ipfs/QmTextExampleKali",
    imageUrl: "https://cloudflare-ipfs.com/ipfs/QmNnqnzSLjnPmE8eksSgu7L3oRFBjLDN88nC6PkbfB6Tav",
    description: "Build your cybersecurity skills using Kali Linux tools.",
    courseId: "kali",
    icon: <FaShieldAlt size={24} color="#0ff" />,
  },
];

function CoursesPage({ theme, toggleTheme }) {
  const navigate = useNavigate();

  const handleStartCourse = (course) => {
    console.log("Starting course:", course.title);
    const { courseId, title, textUrl, imageUrl, description } = course;
    // Navigate to the corresponding course route based on courseId
    navigate(`/course/${courseId}`, { state: { course: { title, textUrl, imageUrl, description } } });
  };
  

  return (
    <div className={`courses-page-container ${theme}`}>
      <h1 className="courses-title">📚 Available Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <h2>{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <button className="course-link" onClick={() => handleStartCourse(course)}>
              Start Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
