import React from "react";
import './StartLoan.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import VerticalBar from "../UIComponents/VerticalBar";
import { useNavigate } from "react-router-dom";
import pound from "../../assets/pound.png";



const StartLoan = () =>{
  const navigate = useNavigate();
  const nextClick = (e) => {
		e.preventDefault();
    navigate('/CustomerInfo',{   
      state: {
      loanType : selectLoanValue,
      loanAmount : loanAmount
     }}

    )
  }
  const backClick = (e) => {
		e.preventDefault();
    navigate('/home')
  }
    
const [loanAmount, setLoan ] = useState("");
const [selectLoanValue, setLoanValue] = useState('')
const handleSelectedLoan = (value) =>{
  // e.preventDefault();
  setLoanValue(value);
  console.log(selectLoanValue)

}





return (
  <>
    <div className="applyLoan-container">
      <div className="applyLoan-header">
        <FontAwesomeIcon className="coinsIcon" icon={faCoins} />
        <h1 className="sev-loanHeader">START YOUR NEW LOAN APPLICATION</h1>
      </div>

      <div className="sev-mainContent">
        <div className="decide-container">
          <p>Decide on your borrowing option:</p>
          
          <button className={`overDraft ${selectLoanValue === 'Overdraft' ? 'selectedButton' : ''}`}
          onClick={() => handleSelectedLoan('Overdraft')}>
            <FontAwesomeIcon
              className="overdraftIcon"
              icon={faHandHoldingDollar}
              size="2xl"
              style={{ color: "#005F44" , marginBottom: '10px', marginLeft: '20px', marginRight: '20px'}}
            />{" "}
            Overdraft
          </button>
          <button 
          className={`creditCard ${selectLoanValue === 'Credit Card' ? 'selectedButton' : ''}`}
          // value="creditCard"
          // onChange={(e) => setLoanValue('creditCard')}
          onClick={() => handleSelectedLoan('Credit Card')}
          >
            {" "}
            <FontAwesomeIcon
              className="creditCardIcon"
              icon={faCreditCard}
              size="2xl"
              style={{ color: "#005F44", marginBottom: '10px',marginLeft: '20px', marginRight: '20px' }}
            />{" "}
            Credit Card
          </button>
          <button className={`loan ${selectLoanValue === 'Loan' ? 'selectedButton' : ''}`}
          onClick={() => handleSelectedLoan('Loan')}>
            <FontAwesomeIcon
              className="loanIcon"
              icon={faMoneyCheckDollar}
              size="2xl"
              style={{ color: "#005F44" ,marginBottom: '10px', marginLeft: '35px', marginRight: '40px'}}
            />
            Personal Loan
          </button>
          <button className={`carFinance ${selectLoanValue === 'Car Finance' ? 'selectedButton' : ''}`}
          onClick={() => handleSelectedLoan('Car Finance')}>
            {" "}
            <FontAwesomeIcon
              icon={faCar}
              size="2xl"
              style={{ color: "#005F44", marginBottom: '10px', marginLeft: '52px', marginRight: '60px' }}
            />
            Car Finance
          </button>
          <button className={`mortgage ${selectLoanValue === 'Mortgage' ? 'selectedButton' : ''}`}
          onClick={() => handleSelectedLoan('Mortgage')}>
            <FontAwesomeIcon
              icon={faHouse}
              size="2xl"
              style={{ color: "#005F44" , marginBottom: '10px',marginLeft: '20px', marginRight: '20px'}}
            />
            Mortgage
          </button>
          <button className="empty">empty</button>
        </div>
        <div className="enterAmount-container">
          <p>Enter your desired amount: </p>
          <div className="loanAmount">
            <label className="loanAmountLabel"> Loan Amount</label>
            <div className="inputFieldLoan">
              <img src={pound} alt="pound sign" className="poundSign" style={{height:'35px', marginRight:'5px', marginBottom:'-10px'}} />
              {/* <FontAwesomeIcon className="poundSign" icon={faSterlingSign} style={{height:'35px', marginRight:'5px', marginBottom:'-10px'}}/> */}
              <input
                value={loanAmount}
                onChange={(e) => setLoan(e.target.value)}
                type="loanAmount"
                placeholder=""
                id="loanAmount"
                name="loanAmount"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="newloan-buttons">
      <button className="backBtn" onClick={backClick}>
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </button>
      <button className="nextBtn" onClick={nextClick}>
        Next <FontAwesomeIcon icon={faChevronRight} />
      </button>
      </div>
    </div>
  </>
);
}


export default StartLoan;
