import VerticalBar from "../UIComponents/VerticalBar";
import "./Homepage.css";
import StartLoan from "../StartLoan/StartLoan";
import HomeCard from "./HomeCard";
import {
  faPlus,
  faCoins,
  faBookOpen,
  faClock,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import SmallSupport from "./SmallSupport";

function Homepage() {
  return (
    <div className="Homepage-container">
      <VerticalBar />

      <div className="Homepage-remaining-content">
        <div className="homeCard-layout">
          <HomeCard
            icon={faCoins}
            homeCardHeader={` APPLY FOR NEW LOAN`}
            homeCardText={` A personal loan could help you with your plans if you’re thinking
            about upgrading your car, redecorating the kitchen or getting your
            finances in order.`}
            promoIcon={faClock}
            promoHeader={`Get your money quickly`}
            promoText={` Receive your money straight away if you apply and are approved between 9am and 8:30pm.
             Otherwise, you'll have your money before 9am the next working day.`}
            buttonText={` APPLY FOR A LOAN`}
          />
          <HomeCard
            icon={faCalculator}
            homeCardHeader={` CREDIT SCORE CHECK`}
            homeCardText={` Thinking about applying for a mortgage, credit card or other type of borrowing? Check Your Credit Score for free, with no impact on your credit file.`}
            promoIcon={faBookOpen}
            promoHeader={`Learn about Credit`}
            promoText={` What is a hard or soft credit check?What is a credit score and how does it work?How to improve your credit score?`}
            buttonText={`SOFT CREDIT CHECK`}
          />
        </div>

        <SmallSupport />
      </div>
      {/* <div className="Homepage-container">
        <SmallSupport />
      </div> */}
    </div>
  );
}

export default Homepage;
