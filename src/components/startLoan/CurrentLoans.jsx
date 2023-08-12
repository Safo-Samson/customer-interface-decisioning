import VerticalBar from "../UIComponents/VerticalBar";
import "./CurrentLoans.css";
import LoanType from "./LoanType";
const CurrrentLoans = () => {
  return (
    <div className="currentLoans-container">
      <VerticalBar />

      <div className="currentLoans-remaining-content">
        <div className="loans-container">
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
                status={"Pending"}
                amount={23324}
                details={"details"}
                nextPayment={new Date().toLocaleDateString()}
              />
              <LoanType
                loanType={"Mortgage"}
                status={"In Progress"}
                amount={23324}
                details={"details"}
                nextPayment={new Date().toLocaleDateString()}
              />
              <LoanType
                loanType={"Personal Loan"}
                status={"Done"}
                amount={23324}
                details={"details"}
                nextPayment={new Date().toLocaleDateString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrrentLoans;
