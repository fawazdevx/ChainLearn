import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ChainLearn</h2>
      <nav>
        <ul>
          <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
          <li><NavLink to="/courses" activeclassname="active">Courses</NavLink></li>
          <li><NavLink to="/nft-marketplace" activeclassname="active">NFT Marketplace</NavLink></li>
          <li><NavLink to="/dex-trading" activeclassname="active">DEX Trading</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
