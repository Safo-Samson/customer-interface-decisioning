import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./VerticalBar.css";

const VerticalBar = () => {
  return (
    <div className="vertical-bar">
      <div>
        <div>
          <button className="vert-button" style={{ paddingLeft: "10%" }}>
            Our products & services{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "15%" }}>
            saving & investment{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button active" d>
            Loans & cars finance{" "}
            {/* <FontAwesomeIcon icon={faPlus} className="vert-button-icon" /> */}
          </button>
          <button className="vert-button" style={{ paddingLeft: "25%" }}>
            bank accounts{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "10%" }}>
            upgrade bank account{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "26%" }}>
            credit cards{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "30%" }}>
            overdrafts{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "32%" }}>
            insurance{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "34%" }}>
            pensions{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "30%" }}>
            mortgages{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "26%" }}>
            other services{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "30%" }}>
            Lifetime ISA
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "30%" }}>
            Savings ISA
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
          <button className="vert-button" style={{ paddingLeft: "36%" }}>
            others{" "}
            <FontAwesomeIcon icon={faPlus} className="vert-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
