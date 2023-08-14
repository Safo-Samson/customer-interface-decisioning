import "./LoanType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faUser,
  faCar,
  faHouse,
  faCircleExclamation,
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
      <div className="details-page" style={{ fontSize: "17px" }}>
        {props.loanType}
      </div>
      <button
        className={` ${
          props.status === "Pending"
            ? "currentLoan-status-pending"
            : props.status === "In Progress"
            ? "currentLoan-status-progress"
            : props.status === "Done"
            ? "currentLoan-status-done"
            : ""
        }`}>
        {props.status}
      </button>
      <div className="details-page-amtDeet" style={{ fontSize: "17px" }}>
        £ {props.amount.toLocaleString()}
        {/* to localeString uses commmas to split it */}
      </div>
      <button className="currentLoan-details">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ marginRight: "5px" }}
        />
        {props.details}
      </button>
      <div className="details-page" style={{ paddingLeft: "40px" }}>
        {props.nextPayment ? props.nextPayment : "---------"}
      </div>
    </div>
  );
};

export default LoanType;
