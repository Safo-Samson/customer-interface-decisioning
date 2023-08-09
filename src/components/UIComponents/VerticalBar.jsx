import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./VerticalBar.css";

const VerticalBar = () => {
  return (
    <div className="vertical-bar">
      <div>
        <div>
          <button className="vert-button">
            Our products & services{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            saving & investment{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button active">
            Loans & cars finance{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            bank accounts{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            upgrade bank account{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            credit cards{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            overdrafts{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            insurance{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            pensions{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            mortgages{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            other services{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button">
            others{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
