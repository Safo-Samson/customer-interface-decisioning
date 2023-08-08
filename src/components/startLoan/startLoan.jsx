import React from "react";
import './startLoan.css'

const StartLoan = () =>{


return(<>
    <div className="applyLoan-container">
        <h1 className="sev-loanHeader">START YOUR NEW LOAN APPLICATION</h1>
        <div className="sev-mainContent">
        <div className="decide-container">
            <p>Decide on your borrowing option:</p>
            <button className="overDraft">Overdraft</button>
            <button className="creditCard">Credit Card</button>
            <button className="loan">Loan</button>
            <button className="carFinance">Car Finance</button>
            <button className="mortgage">Mortgage</button>
        </div>
        <div className="enterAmount-container">
            <p>Enter your desired amount: </p>
        </div>
        </div>
    </div>


</>)
}


export default StartLoan;
