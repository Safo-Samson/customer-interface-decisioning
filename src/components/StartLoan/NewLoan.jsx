import VerticalBar from "../UIComponents/VerticalBar";
import "./NewLoan.css";
import StartLoan from "../StartLoan/StartLoan";

function NewLoan() {
  return (
    <div className="newLoan-container">
      <VerticalBar />

      <div className="newLoan-remaining-content">
        <StartLoan />
      </div>
    </div>
  );
}

export default NewLoan;
