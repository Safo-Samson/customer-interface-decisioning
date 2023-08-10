import VerticalBar from "../UIComponents/VerticalBar";
import "./ModelDecision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCoins,
  faChevronLeft,
  faCircleDown,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModelDecision = ({ decision, setDecision }) => {
  // decisions can be "accepted 1" or "rejected 0" or rejected with "counter offer 2";
  const ModelDecision = 3;

  const [loanType, setType] = useState(location.state?.loanType || "undefined");
  const [loanAmountinfo, setAmountInfo] = useState(
    location.state?.amount || "undefined"
  );
  const [dateApplied, setValue] = useState(
    location.state?.dateApplied || "undefined"
  );

  const [applicationID, setID] = useState(
    location.state?.applicationID || "undefined"
  );

  const [loanTerm, setTerm] = useState(location.state?.loanTerm || "3 months");

  // decision accepted headers,icons and paragraphs
  const decisionHeaderAccepted = "SUCCESSFUL APPLICATION!.";
  const decisionAcceptedParagraph =
    "Thank you for applying your loan has been accepted. For further information and payment schedule please check details.";
  const decisionAcceptedIcon = faCircleCheck;
  const decisionAcceptedButton = "See payment schedule";
  const acceptedIconColor = "#005f44";

  // decision rejected headers,icons and paragraphs
  const decisionHeaderRejected = "SORRY, YOUR LOAN HAS BEEN REJECTED.";
  const decisionRejectedParagraph =
    "Thank you for your time, however we have to reject your loan application as it does not meet the criteria for acceptance. For further detail please see details below.";
  const decisionRejectedIcon = faCircleDown;
  const deccisionRejectedButton = "Ask for Help";
  const rejectedIconColor = "#dc2a4d";

  // decision counter offer headers,icons and paragraphs
  const decisionHeaderCounterOffer =
    "UNSUCCESSFUL APPLICATION - OTHER OPTIONS AVAILABLE.";
  const decisionCounterOfferParagraph = `Thank you for your time, however we have to reject your loan application as it does not meet the criteria for acceptance. `;
  const decisionCounterOfferParagraph2 = `However, lowering the loan amount can help you apply successfully!`;
  const decisionCounterOfferIcon = faCircleExclamation;
  const decisionCounterOfferButton = "Find out more";
  const counterOfferIconColor = "#ffd02c";
  const navigate = useNavigate();
  const handleBack = (e) =>{
    e.preventDefault();
    navigate('/CustomerInfo')
  }

  return (
    <div className="mainDecision-container">
      <VerticalBar />

      <div className="mainDecision-remaining-content">
        <div className="ModelDecision-container">
          {ModelDecision === 1 ? (
            <>
              <h1>
                <FontAwesomeIcon
                  icon={faCoins}
                  style={{ marginRight: "10.22px", fontSize: "40px" }}
                />
                {decisionHeaderAccepted}
              </h1>
              <div className="miniDecision-container miniDecision-container-accepted">
                <p>{decisionAcceptedParagraph}</p>
                <FontAwesomeIcon
                  icon={decisionAcceptedIcon}
                  style={{ fontSize: "50px", color: acceptedIconColor }}
                />
                <button className="miniDecision-container-button miniDecision-container-accepted-button">
                  {decisionAcceptedButton}
                </button>
              </div>
            </>
          ) : ModelDecision === 2 ? (
            <>
              <h1>
                {" "}
                <FontAwesomeIcon
                  icon={faCoins}
                  style={{ marginRight: "10.22px", fontSize: "40px" }}
                />
                {decisionHeaderRejected}
              </h1>
              <div className="miniDecision-container miniDecision-container-rejected">
                <p>{decisionRejectedParagraph}</p>
                <FontAwesomeIcon
                  icon={decisionRejectedIcon}
                  style={{ fontSize: "50px", color: rejectedIconColor }}
                />
                <button className="miniDecision-container-button miniDecision-container-rejected-button">
                  {deccisionRejectedButton}
                </button>
              </div>
            </>
          ) : ModelDecision === 3 ? (
            <>
              <h1>
                {" "}
                <FontAwesomeIcon
                  icon={faCoins}
                  style={{ marginRight: "10.22px", fontSize: "40px" }}
                />
                {decisionHeaderCounterOffer}
              </h1>
              <div className="miniDecision-container miniDecision-container-counter">
                <p>{decisionCounterOfferParagraph}</p>
                <p style={{ fontWeight: "bold" }}>
                  {decisionCounterOfferParagraph2}
                </p>
                <FontAwesomeIcon
                  icon={decisionCounterOfferIcon}
                  style={{ fontSize: "50px", color: counterOfferIconColor }}
                />
                <button className="miniDecision-container-button miniDecision-container-counter-button">
                  {decisionCounterOfferButton}
                </button>
              </div>
            </>
          ) : null}

          <div className="horizonaLine"></div>
          <div className="loanInfo-container">
            LOAN INFORMATION
            <div className="loanFields">
              <div className="loanField">
                <label htmlFor="applicationID"> Application ID</label>
                <input
                  value={applicationID}
                  onChange={(e) => setID(e.target.value)}
                  type="applicationID"
                  placeholder=""
                  id="applicationID"
                  name="applicationID"
                  readOnly
                />
              </div>
              <div className="loanField">
                <label htmlFor="dateApplied"> Date Applied </label>
                <input
                  value={dateApplied}
                  onChange={(e) => setValue(e.target.value)}
                  type="date"
                  placeholder=""
                  id="dateApplied"
                  name="dateApplied"
                  readOnly
                />
              </div>

              <div className="loanField">
                <label htmlFor="loanType"> Loan Type</label>
                <input
                  value={loanType}
                  onChange={(e) => setType(e.target.value)}
                  type="loanType"
                  placeholder=""
                  id="loanType"
                  name="loanType"
                  readOnly
                />
              </div>
              <div className="loanField">
                <label htmlFor="loanAmountinfo"> Loan Amount</label>
                <input
                  value={loanAmountinfo}
                  onChange={(e) => setAmountInfo(e.target.value)}
                  type="loanAmountinfo"
                  placeholder=""
                  id="loanAmountinfo"
                  name="loanAmountinfo"
                  readOnly
                />
              </div>

              <div className="loanField">
                <label htmlFor="loanTerm">Loan Term</label>
                <input
                  value={loanTerm}
                  onChange={(e) => setTerm(e.target.value)}
                  type="loanTerm"
                  placeholder="months"
                  id="loanterm"
                  name="loanTerm"
                  readOnly
                />
              </div>
            </div>
          </div>
          <button className="mBack" onClick={handleBack}>
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </button>

          <button className="mDone"> Done</button>
        </div>
      </div>
    </div>
  );
};

export default ModelDecision;
