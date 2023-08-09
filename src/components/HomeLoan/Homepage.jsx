import VerticalBar from "../UIComponents/VerticalBar";
import "./Homepage.css";
import StartLoan from "../StartLoan/StartLoan";
import HomeCard from "./HomeCard";

function Homepage() {
  return (
    <div className="Homepage-container">
      <VerticalBar />

      <div className="Homepage-remaining-content">
        <div className="homeCard-layout">
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
