import VerticalBar from "../UIComponents/VerticalBar";
import "./SoftCombined.css";
import SoftCheck from "./SoftCheck";

function SoftCombined() {
  return (
    <div className="softCombined-container">
      <VerticalBar />

      <div className="softCombined-remaining-content">
        <SoftCheck />

      </div>
    </div>
  );
}

export default SoftCombined;