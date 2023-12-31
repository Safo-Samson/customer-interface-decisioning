import VerticalBar from "../UIComponents/VerticalBar";
import "./CurrentLoans.css";
import LoanType from "./LoanType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const CurrrentLoans = () => {
  const nav = useNavigate();

  function backHome() {
    nav("/home");
  }
  return (
    <div className="currentLoans-container">
      <VerticalBar />

      <div className="currentLoans-remaining-content">
        <div className="loans-container">
          <div className="currentLoan-centered-container">
            <FontAwesomeIcon
              icon={faSterlingSign}
              className="current-poundSign"
            />{" "}
            <h1>MANAGE YOUR CURRENT LOANS</h1>
          </div>

          <div className="current-loanInfo-container">
            <div className="currentLoanHeaders">
              <b>LOAN TYPE</b> <b> STATUS</b>
              <b>AMOUNT</b>
              <b>DETAILS</b>
              <b>NEXT PAYMENT</b>
            </div>
            <div className="current-loanFields">
              <LoanType
                loanType={"Credit Card"}
                status={"Done"}
                amount={8000}
                details={"Details"}
                // nextPayment={new Date("none").toLocaleDateString()}
              />
              <LoanType
                loanType={"Mortgage"}
                status={"In Progress"}
                amount={100000}
                details={"Details"}
                nextPayment={new Date().toLocaleDateString()}
              />
              <LoanType
                loanType={"Personal Loan"}
                status={"In Progress"}
                amount={15000}
                details={"Details"}
                nextPayment={new Date('2023-09-23').toLocaleDateString()}
              />
            </div>
          </div>
          <button className="currentLoan-back" onClick={backHome}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default CurrrentLoans;
