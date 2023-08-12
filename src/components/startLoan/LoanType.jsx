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
    <div className="current-loanFields-item">
      <div className="icon-type">{loanIcon}</div>
      <div className="details-page">{props.loanType}</div>
      <button
        className={` ${
          props.status === "Pending"
            ? "currentLoan-status-pending"
            : props.status === "In Progress"
            ? "currentLoan-status-progress"
            : props.status === "Done"
            ? "currentLoan-status-done"
            : ""
        }`}
        style={{ minWidth: "150px" }}>
        {props.status}
      </button>
      <div className="details-page-amtDeet">£ {props.amount}</div>
      <div className="details-page-amtDeet">{props.details}</div>
      <div className="details-page" style={{ paddingLeft: "40px" }}>
        {props.nextPayment}
      </div>
    </div>
  );
};

export default LoanType;
