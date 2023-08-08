import React, { useState } from "react";

import "./VerticalBar.css";

const VerticalBar = () => {
  return (
    <div className="vertical-bar">
      <div>
        <div>
          <button className="vert-button">Our products & services</button>
          <button className="vert-button">saving & investment</button>
          <button className="vert-button active">Loans & cars finance</button>
          <button className="vert-button">bank accounts</button>
          <button className="vert-button">upgrade bank account</button>
          <button className="vert-button">credit cards</button>
          <button className="vert-button">overdrafts</button>
          <button className="vert-button">insurance</button>
          <button className="vert-button">pensions</button>
          <button className="vert-button">mortgages</button>
          <button className="vert-button">other services</button>
          <button className="vert-button">others</button>
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
