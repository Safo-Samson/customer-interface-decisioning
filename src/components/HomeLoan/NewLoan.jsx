import VerticalBar from "../UIComponents/VerticalBar";
import "./NewLoan.css";
import StartLoan from "../StartLoan/StartLoan";
import HomeCard from "./HomeCard";

function NewLoan() {
  return (
    <div className="newLoan-container">
      <VerticalBar />

      <div className="newLoan-remaining-content">
        <StartLoan />
        {/* <HomeCard /> */}
      </div>
    </div>
  );
}

export default NewLoan;
