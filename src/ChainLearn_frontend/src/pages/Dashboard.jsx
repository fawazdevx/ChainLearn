import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { AuthClient } from "@dfinity/auth-client";
import { FaSun, FaMoon } from "react-icons/fa";
import { createActor } from "../../../declarations/ChainLearn_backend";
import "../styles.css";
import Sidebar from "../components/Sidebar";

const host = "http://localhost:4943";
const CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

async function fetchUserCount() {
  try {
    const actor = createActor(CANISTER_ID, {
      agentOptions: { host },
    });
    const count = await actor.getUserCount();
    console.log("Fetched user count:", count);
    return Number(count); // Convert BigInt to number
  } catch (error) {
    console.error("Error fetching user count:", error);
    return 0;
  }
}

async function logoutPlug() {
  if (window.ic?.plug) {
    await window.ic.plug.disconnect();
    console.log("Plug disconnected");
  }
}

async function logoutStoic() {
  if (window.stoic) {
    await window.stoic.disconnect();
    console.log("Stoic disconnected");
  } else if (window.stoicWallet) {
    await window.stoicWallet.disconnect();
    console.log("StoicWallet disconnected");
  }
}

function Dashboard({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    async function loadUserCount() {
      const count = await fetchUserCount();
      setUserCount(count);
    }
    loadUserCount();
  }, []);

  const handleDisconnect = async () => {
    try {
      const authClient = await AuthClient.create();
      await authClient.logout(); // Log out II session if any
      await logoutPlug();
      await logoutStoic();
      localStorage.removeItem("principal");
      // Force full page reload for a clean state
      window.location.href = "/";
    } catch (error) {
      console.error("Disconnect error:", error);
      window.location.href = "/";
    }
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      <Sidebar />
      <div className="dashboard-main-content" style={{ marginLeft: "220px", padding: "20px" }}>
        <SocialIcons />
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} color="#000" />}
        </button>
        <h1 className="dashboard-title">ChainLearn LMS Dashboard</h1>
        <p className="dashboard-subtitle">
          Welcome! We have {userCount} registered students.
        </p>
        <div className="dashboard-cards">
          <div className="dashboard-card" onClick={() => navigate("/courses")}>
            <h3>Courses</h3>
            <p>Browse and learn</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/nft-marketplace")}>
            <h3>NFT Marketplace</h3>
            <p>Coming soon</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate("/dex-trading")}>
            <h3>DEX Trading</h3>
            <p>Coming soon</p>
          </div>
        </div>
        <button className="logout-btn" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
