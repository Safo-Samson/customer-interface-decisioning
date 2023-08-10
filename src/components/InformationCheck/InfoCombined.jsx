import VerticalBar from "../UIComponents/VerticalBar";
import "./InfoCombined.css";
import InformationCheck from "./InformationCheck";

function InfoCombined() {
  return (
    <div className="infoCombined-container">
      <VerticalBar />

      <div className="infoCombined-remaining-content">
        <InformationCheck />

      </div>
    </div>
  );
}

export default InfoCombined;
