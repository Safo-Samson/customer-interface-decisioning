import "./UserBar.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons"; // Import the envelope (message) icon

import { Link } from "react-router-dom";

const UserBar = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(4); // Replace with your actual unread message count

  useEffect(() => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date();
    const formatted = date.toLocaleString(undefined, options);

    setFormattedDate(formatted);
  }, []);

  return (
    <div className="user-bar">
      <div className="user-logo-container">
        <div className="user-logo-text">Ms. J. Carter</div>

        <div className="Last-login">
          <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />
          last logged on {formattedDate}
        </div>
      </div>

      <div className="user-bar-text">
        <h4>
          {" "}
          <Link to="/home" style={{ textDecoration: "none", color: "#006a4c" }}>
            {" "}
            <FontAwesomeIcon
              icon={faHouseChimney}
              style={{ fontSize: "18px" }}
            />
          </Link>
        </h4>
        <h4>Your Accounts</h4>
        <h4>Your Profile</h4>
        <h4>Help & Support</h4>
        <h4 className="message-icon-container">
          <FontAwesomeIcon icon={faEnvelope} className="message-icon" />
          {unreadMessages > 0 && (
            <div className="unread-messages">{unreadMessages}</div>
          )}
        </h4>
        <h4>
          <Link to="/" style={{ textDecoration: "none", color: "#006a4c" }}>
            {" "}
            Log off
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default React.memo(UserBar);
