import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoursesPage from "./pages/courses/CoursesPage";
import PythonCourse from "./pages/courses/PythonCourse";
import UnityCourse from "./pages/courses/UnityCourse";
import KaliCourse from "./pages/courses/KaliCourse";
import NftMarketplace from "./pages/NftMarketplace";
import DexTrading from "./pages/DexTrading";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/dashboard" element={<Dashboard theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/courses" element={<CoursesPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/course/python" element={<PythonCourse theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/course/unity" element={<UnityCourse theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/course/kali" element={<KaliCourse theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/nft-marketplace" element={<NftMarketplace theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/dex-trading" element={<DexTrading theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
