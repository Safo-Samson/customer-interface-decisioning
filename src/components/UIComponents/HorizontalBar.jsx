import "./HorizontalBar.css";
import horseLogo from "../../assets/horseLogo.jpeg";
import React from "react";

const HorizontalBar = () => {
  return (
    <div className="horizontal-bar">
      <div className="logo-container">
        <div className="logo-text">Lloyds bank</div>
        <img src={horseLogo} alt="Lloyds horse logo" className="bank-logo" />
      </div>

      <div className="custom-dropdown">
        <div className="dropdown-header">Our product and services</div>
        <div className="dropdown-content">
          <a href="#">Loans</a>
          <a href="#">Discounts</a>
          <a href="#">ISAs</a>
          <a href="#">About Us</a>
        </div>
      </div>

      <div className="bar-text">
        <h4>Cookie policy</h4>
        <h4>Your Security</h4>
      </div>

      <i className="fa fa-user profile-icon"></i>
    </div>
  );
};

export default React.memo(HorizontalBar);
