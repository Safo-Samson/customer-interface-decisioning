import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./InformationCheck.css";
import { useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../PopUp";

const InformationCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [editBTNtext, setEditText] = useState("Edit");
  const loanTypes = [
    "Credit Card",
    "Mortgage",
    "Personal Loan",
    "Car Finance",
    "OverDraft",
  ];
  const ResidentTypes = ["Owned", "Rent", "Mortgaged", "Parents' House"];
  const EmpStatusTypes = ["Employed", "Unemployed", "Self-Employed", "Student"];

  const [editingLoanAmount, setEditingLoanAmount] = useState(false);

  // handling the edit after it has been saved
  const enableEdit = (e) => {
    e.preventDefault();
    if (editBTNtext === "Edit") {
      setEditText("Save");
      setEditingLoanAmount(true);
    } else {
      e.preventDefault();
      setAcceptOpen(!acceptOpen);
      setEditingLoanAmount(false);
    }

  };

  function handlePopUpCancel() {
    setAcceptOpen(!acceptOpen);
    setEditText("Save");
  }

  function handlePopUpConfirm() {
    setAcceptOpen(!acceptOpen);
    updateCustomerInfor(AccountNo);
    setEditText("Edit");

    // not being used atm
    const [successMessage, setSuccessMessage] = useState("");
    setSuccessMessage("Your details have been successfully updated");
    setTimeout(() => {
      setSuccessMessage("");
    }, 1000);
  }

  // to edit the money with commas function
  const formatMoney = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  // handling apply button
  const handleApply = (e) => {
    e.preventDefault();
    navigate("/ModelDecision", {state:
    {
      AccountNo: AccountNo,
      dateApplied: dateApplied,
      loanType: loanType,
      loanTerm: loanTerm,
      loanAmountinfo: loanAmountinfo

    }});
  };

  // handling close button
  const handleClose = (e) => {
    e.preventDefault();
    navigate("/NewLoan");
  };

  const [loanType, setType] = useState(location.state?.loanType || "undefined");
  const [loanAmountinfo, setAmountInfo] = useState(
    location.state?.loanAmount || "undefined"
  );
  const [dateApplied, setValue] = useState(
    location.state?.dateApplied || "undefined"
  );
  const [AccountNo, setAccount] = useState(
    location.state?.cusID || "6203423865"
  );
  const [creditScore, setScore] = useState(location.state?.creditScore);
  const [birthDate, setBirth] = useState(location.state?.birthDate);
  const [residentialStatus, setResidential] = useState(
    location.state?.residentialStatus
  );
  const [employmentStatus, setEmployment] = useState(
    location.state?.employmentStatus
  );
  const [dependents, setDependents] = useState(
    location.state?.dependents || "3"
  );
  const [income, setIncome] = useState(location.state?.income || "200000");
  const [defaults, setDefaults] = useState(location.state?.defaults);
  const [loyaltyDays, setLoyalty] = useState(
    location.state?.loyaltyDays || "729"
  );
  const [loanTerm, setTerm] = useState(location.state?.loanTerm || "7");
  const [acceptOpen, setAcceptOpen] = useState(false);

  const [editingLoanTerm, setEditingLoanTerm] = useState(false);

  const formatLoanTerm = (value) => {
    return value !== "" ? `${value} month${value !== "1" ? "s" : ""}` : "";
  };

  // fetch api call to update user

  function updateCustomerInfor(user_id) {
    const updatedData = {
      occupation: employmentStatus,
      residential_status: residentialStatus,
      dependents: dependents,
      salary: income,
      loan_type: loanType,
      loan_duration: loanTerm,
      loan_amount: loanAmountinfo,
    };
    fetch(`http://77.91.124.124:5000/update-application/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Message from the API response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="informationCheck-container">
        <div className="informationCheck-header">
          <FontAwesomeIcon className="coinsIcon" icon={faCoins} />
          <h1 className="sev-infoHeader">MY DETAILS</h1>
        </div>

        <div className="warning">
            <p>Please make sure your contact information is up-to-date. <br />If you want to change your contact details, you can do so through this <a href=''>link</a></p>
          </div>

        <form className="form-container">

          <div className="personalInfo">
            <div className="personalInfoTxt">CUSTOMER INFORMATION</div>
            <div className="personalFields">
              <div className="AccountNo">
                <label htmlFor="AccountNo"> Account Number</label>
                <input
                  value={AccountNo}
                  onChange={(e) => setAccount(e.target.value)}
                  type="AccountNo"
                  placeholder=""
                  id="AccountNo"
                  name="AccountNo"
                  readOnly
                />
              </div>

              <div className="birthDate">
                <label htmlFor="birthDate"> Birth date</label>
                <input
                  value={birthDate}
                  onChange={(e) => setBirth(e.target.value)}
                  type="date"
                  placeholder=""
                  id="birthDate"
                  name="birthDate"
                  readOnly
                />
              </div>
              <div className="loyaltyDays">
                <label htmlFor="loyaltyDays"> Loyalty Days</label>
                <input
                  value={loyaltyDays}
                  onChange={(e) => setLoyalty(e.target.value)}
                  type="loyaltyDays"
                  placeholder=""
                  id="loyaltyDays"
                  name="loyaltyDays"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="sev-loanInfo">
            <div className="loanInfoTxt">LOAN INFORMATION</div>
            <div className="sev-loanFields">
              <div className="dateApplied">
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

              {editBTNtext === "Save" ? (
                <div className="loanType">
                  <label htmlFor="loanType"> Loan Type</label>
                  <select
                    value={loanType}
                    onChange={(e) => setType(e.target.value)}
                    id="loanType"
                    name="loanType"
                    className="info-editable-field" // Apply red outline style here
                  >
                    <option value={loanType}>{loanType}</option>
                    {loanTypes
                      .filter((type) => loanType !== type)
                      .map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                  </select>
                </div>
              ) : (
                <div className="loanType">
                  <label htmlFor="loanType"> Loan Type</label>
                  <input
                    value={loanType}
                    onChange={(e) => setType(e.target.value)}
                    type="text"
                    placeholder=""
                    id="loanType"
                    name="loanType"
                    readOnly
                  />
                </div>
              )}

              <div className="loanAmountinfo">
                <label htmlFor="loanAmountinfo"> Loan Amount</label>
                {editingLoanAmount ? (
                  <input
                    // value={formatMoney(loanAmountinfo)} This wont work well
                    value={loanAmountinfo}
                    onChange={(e) => setAmountInfo(e.target.value)}
                    type="text"
                    placeholder=""
                    id="loanAmountinfo"
                    name="loanAmountinfo"
                    // Add the money formatting function here
                    onBlur={() => setAmountInfo(loanAmountinfo)}
                    style={{ border: "1px solid green" }}
                  />
                ) : (
                  <div>
                    <input value={formatMoney(loanAmountinfo)} readOnly />
                  </div>
                )}
              </div>

              <div className="loanTerm">
                <label htmlFor="loanTerm"> Loan Term</label>
                {editingLoanAmount ? (
                  <input
                    // value={formatMoney(loanTerm)} This wont work well
                    value={loanTerm}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder=""
                    id="loanTerm"
                    name="loanTerm"
                    // Add the money formatting function here
                    onBlur={() => setEditingLoanTerm(false)}
                    style={{ border: "1px solid green" }}
                  />
                ) : (
                  <div>
                    <input value={formatLoanTerm(loanTerm)} readOnly />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="financialInfo">
            <div className="financialInfoTxt">FINANCIAL INFORMATION</div>
            <div className="financialFields">
              {editBTNtext === "Save" ? (
                <div className="employmentStatus">
                  <label htmlFor="employmentStatus"> Employment Status</label>
                  <select
                    value={employmentStatus}
                    onChange={(e) => setEmployment(e.target.value)}
                    type="employmentStatus"
                    id="employmentStatus"
                    name="employmentStatus"
                    className="info-editable-field" // Apply red outline style here
                  >
                    {EmpStatusTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="employmentStatus">
                  <label htmlFor="employmentStatus"> Employment Status</label>
                  <input
                    value={employmentStatus}
                    onChange={(e) => setEmployment(e.target.value)}
                    type="text"
                    placeholder=""
                    id="employmentStatus"
                    name="employmentStatus"
                    readOnly
                  />
                </div>
              )}
              <div className="income">
                <label htmlFor="income"> Income</label>
                <input
                  value={formatMoney(income)}
                  onChange={(e) => setIncome(e.target.value)}
                  type="income"
                  placeholder=""
                  id="income"
                  name="income"
                  readOnly
                />
              </div>
              <div className="dependents">
                <label htmlFor="dependents"> Dependents</label>
                <input
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  type="dependents"
                  placeholder=""
                  id="dependents"
                  name="dependents"
                  readOnly
                />
              </div>

              {editBTNtext === "Save" ? (
                <div className="residentialStatus">
                  <label htmlFor="residentialStatus"> Residential Status</label>
                  <select
                    value={residentialStatus}
                    onChange={(e) => setResidential(e.target.value)}
                    type="residentialStatus"
                    id="residentialStatus"
                    name="residentialStatus"
                    className="info-editable-field" // Apply red outline style here
                  >
                    {ResidentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="residentialStatus">
                  <label htmlFor="residentialStatus"> Residential Status</label>
                  <input
                    value={residentialStatus}
                    onChange={(e) => setResidential(e.target.value)}
                    type="text"
                    placeholder=""
                    id="residentialStatus"
                    name="residentialStatus"
                    readOnly
                  />
                </div>
              )}
            </div>


            <div className="buttons">
              <button className="backBTN" onClick={handleClose}>
                {" "}
                <FontAwesomeIcon icon={faChevronLeft} />
                Back
              </button>

              <button className="editBTN" onClick={enableEdit}>
                {editBTNtext === "Edit" ? (
                  <span>
                    <FontAwesomeIcon icon={faPen} /> Edit Details
                  </span>
                ) : (
                  "Save"
                )}
                {acceptOpen && (
                  <Popup
                    content={
                      <>
                        <b>Do you want to save your changes?</b>
                        <p>
                          By saving the changes to this form, you confirm that
                          all information provided is accurate and complete. You
                          acknowledge that any false or misleading information
                          may have legal consequences, and you take full
                          responsibility for the information provided.
                        </p>
                        <div className="Popup-buttons">
                          <button onClick={handlePopUpCancel}>Cancel</button>
                          <button onClick={handlePopUpConfirm}>Confirm</button>
                        </div>
                      </>
                    }
                    // handleClose={toggleAcceptPopup}
                    type="accepted"
                  />
                )}
              </button>
              <button className="applyBTN" onClick={handleApply}>
                Apply for loan <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InformationCheck;
