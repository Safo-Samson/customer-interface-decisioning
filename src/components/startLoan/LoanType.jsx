import "./LoanType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faUser,
  faCar,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoanType = (props) => {
  let loanIcon;

  if (props.loanType === "Credit Card") {
    loanIcon = <FontAwesomeIcon icon={faCreditCard} />;
  } else if (props.loanType === "Personal Loan") {
    loanIcon = <FontAwesomeIcon icon={faUser} />;
  } else if (props.loanType === "Mortgage") {
    loanIcon = <FontAwesomeIcon icon={faHouse} />;
  } else if (props.loanType === "Car Loan") {
    loanIcon = <FontAwesomeIcon icon={faCar} />;
  }

  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/ReviewInformation");
  };

  return (
    <div className="current-loanInfo-container" onClick={handleClick}>
      <div className="currentLoanHeaders">
        <b>LOAN TYPE</b> <b>STATUS</b>
        <b>AMOUNT </b>
        <b>DETAILS</b>
        <b>NEXT PAYMENT</b>
      </div>

      <div className="current-loanFields">
        <div className="current-loanFields-item">
          {/* <div className="icon-type">{loanIcon}</div> */}

          <div className="details-page">
            <b>Account No:</b> <br></br>
            {props.AccountNo}
          </div>

          <div className="details-page-extended">
            <b>Date Applied:</b>
            <br></br>
            {props.dateApplied}
          </div>

          <div className="details-page">
            <b>Amount: </b> <br></br>£{props.amount}
          </div>

          <div className="details-page">
            <b>Loan Type:</b> <br></br>
            {props.loanType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanType;
