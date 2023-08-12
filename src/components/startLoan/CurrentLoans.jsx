import VerticalBar from "../UIComponents/VerticalBar";
import "./CurrentLoans.css";
import LoanType from "./LoanType";
const CurrrentLoans = () => {
  return (
    <div className="currentLoans-container">
      <VerticalBar />

      <div className="currentLoans-remaining-content">
        <div className="loans-container">
          <LoanType />
        </div>
      </div>
    </div>
  );
};
export default CurrrentLoans;
