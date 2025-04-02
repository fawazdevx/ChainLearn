import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginInternetIdentity, connectPlugWallet, connectStoicWallet } from "../utils/auth.js";
import SocialIcons from "../components/SocialIcons";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles.css";

function Home({ theme, toggleTheme }) {
  const [principal, setPrincipal] = useState(null);
  const [availableWallets, setAvailableWallets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let detectedWallets = [];
    if (window.ic?.plug) detectedWallets.push("Plug Wallet");
    if (window.stoic || window.stoicWallet) detectedWallets.push("Stoic Wallet");
    setAvailableWallets(detectedWallets);
  }, []);

  const handleLoginII = async () => {
    const userPrincipal = await loginInternetIdentity(navigate);
    if (userPrincipal) {
      setPrincipal(userPrincipal);
    }
  };

  const handleLoginPlug = async () => {
    if (!window.ic?.plug) return alert("Plug Wallet not detected!");
    const userPrincipal = await connectPlugWallet(navigate);
    if (userPrincipal) {
      setPrincipal(userPrincipal);
    }
  };

  const handleLoginStoic = async () => {
    if (!window.stoic && !window.stoicWallet)
      return alert("Stoic Wallet not detected!");
    const userPrincipal = await connectStoicWallet(navigate);
    if (userPrincipal) {
      setPrincipal(userPrincipal);
    }
  };

  return (
    <div className="home-container">
      <div className="background-animation"></div>

      {/* Theme Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} color="#000" />}
      </button>

      <SocialIcons />

      <div className="login-box">
        <h1>Welcome to ChainLearn</h1>
        {principal ? (
          <div>
            <p>Logged in as: {principal}</p>
            <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
          </div>
        ) : (
          <>
            <button onClick={handleLoginII}>Login with Internet Identity</button>
            {availableWallets.includes("Plug Wallet") && (
              <button onClick={handleLoginPlug}>Connect Plug Wallet</button>
            )}
            {availableWallets.includes("Stoic Wallet") && (
              <button onClick={handleLoginStoic}>Connect Stoic Wallet</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
