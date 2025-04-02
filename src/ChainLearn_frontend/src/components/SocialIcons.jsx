import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import "../styles.css";

function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="icons-row">
        <a
          href="https://t.me/YourProject"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0088CC" }} // Telegram brand color
        >
          <FaTelegram size={24} />
        </a>
        <a
          href="https://discord.gg/YourProject"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#5865F2" }} // Discord brand color
        >
          <FaDiscord size={24} />
        </a>
        <a
          href="https://twitter.com/ChainLearnWeb3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1DA1F2" }} // Twitter brand color
        >
          <FaTwitter size={24} />
        </a>

        {/* DOC link in the same row */}
        <a
          href="https://docs.yourproject.com"
          target="_blank"
          rel="noopener noreferrer"
          className="doc-link"
          style={{ marginLeft: "10px" }}
        >
          DOC
        </a>
      </div>
      <p className="audited-text">
        Audited by <span className="slowmist">UNREALFDEV</span>
      </p>
    </div>
  );
}

export default SocialIcons;
