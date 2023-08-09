import React from "react";
import './startLoan.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import VerticalBar from "../UIComponents/VerticalBar";
import { useNavigate } from "react-router-dom";

const StartLoan = () =>{
  const navigate = useNavigate();
  const handleClick = (e) => {
		e.preventDefault();
    navigate('/CustomerInfo')
  }

    
const [loanAmount, setLoan ] = useState("");


return (
  <>
    <div className="applyLoan-container">
      <div className="applyLoan-header">
        <FontAwesomeIcon className="coinsIcon" icon={faCoins} />
        <h1 className="sev-loanHeader">START YOUR NEW LOAN APPLICATION</h1>
      </div>

      <div className="sev-mainContent">
        <div className="decide-container">
          <p>Decide on your borrowing option:</p>
          <button className="overDraft">
            <FontAwesomeIcon
              className="overdraftIcon"
              icon={faHandHoldingDollar}
              size="2xl"
              style={{ color: "#005F44" }}
            />{" "}
            Overdraft
          </button>
          <button className="creditCard">
            {" "}
            <FontAwesomeIcon
              className="creditCardIcon"
              icon={faCreditCard}
              size="2xl"
              style={{ color: "#005F44" }}
            />{" "}
            Credit Card
          </button>
          <button className="loan">
            <FontAwesomeIcon
              className="loanIcon"
              icon={faMoneyCheckDollar}
              size="2xl"
              style={{ color: "#005F44" }}
            />
            Loan
          </button>
          <button className="carFinance">
            {" "}
            <FontAwesomeIcon
              icon={faCar}
              size="2xl"
              style={{ color: "#005F44" }}
            />
            Car Finance
          </button>
          <button className="mortgage">
            <FontAwesomeIcon
              icon={faHouse}
              size="2xl"
              style={{ color: "#005F44" }}
            />
            Mortgage
          </button>
        </div>
        <div className="enterAmount-container">
          <p>Enter your desired amount: </p>
          <div className="loanAmount">
            <label className="loanAmountLabel"> Loan Amount</label>
            <div className="inputFieldLoan">
              <FontAwesomeIcon className="poundSign" icon={faSterlingSign} />
              <input
                value={loanAmount}
                onChange={(e) => setLoan(e.target.value)}
                type="loanAmount"
                placeholder=""
                id="loanAmount"
                name="loanAmount"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="backBtn">
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </button>
      <button className="nextBtn" onClick={handleClick}>
        Next <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </>
);
}


export default StartLoan;
