import "./UserBar.css";
import React from "react";

import { useState, useEffect } from "react";

const UserBar = () => {
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    setDate(new Date().toLocaleString()), [];
  });
  return (
    <div className="user-bar">
      <div className="user-logo-container">
        <div className="user-logo-text">Mr. L.Messi</div>
        <div className="Last-login"> last logged on {date}</div>
      </div>

      <div className="user-bar-text">
        <h4>Your Accounts</h4>
        <h4>Your Profile</h4>
        <h4>Help & Support</h4>
        <i className="fa fa-user profile-icon"></i>
        <h4>Log off</h4>
      </div>
    </div>
  );
};

export default React.memo(UserBar);
