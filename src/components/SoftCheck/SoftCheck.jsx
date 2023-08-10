import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Apex from "./Apex";
import './SoftCheck.css'

const SoftCheck= () =>{
    return(
        <>
        <div className="softCheck-container">
            
            <h1 className="sev-softCheckHeader">YOUR CREDIT SCORE</h1>
            <div className="softCheck-mainContent">
            <div className="softCreditScore">
                <p>Credit Score</p>
                <Apex progress = {970}/>
            </div>
            <div className="insights-softCheck">
                <p>Insights</p>
                <div className="insights-softCheck-content">

                    <div className="softCheck-bad">
                    <FontAwesomeIcon className= 'softCheck-exclamationMarkIcon'icon={faExclamation} />
                
                    <p><FontAwesomeIcon icon={faExclamation} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/> Electricity bill payment past due</p>
                    <p><FontAwesomeIcon icon={faExclamation} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/> Moved 3 times the past year</p>

                    </div>
                    <div className="softCheck-good">
                    <FontAwesomeIcon className= 'softCheck-checkMarkIcon'icon={faCheck} />
                    <p><FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>All debit balances paid off</p>
                    <p><FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>Mix of 4 credit cards used</p>
                    <p><FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>Stable income of the past 5 years</p>



                </div>
                </div>

            </div>

            </div>
            <div className="understandingCredit">
            <FontAwesomeIcon className= 'softCheck-questionMarkIcon'icon={faQuestion} />
                <div className="understandingCredit-texts">
                    <h1>Understanding Credit</h1>
                    
                    <p>Whether you’ve never borrowed before and want to understand the basics, or you’re an existing borrower looking for information and support, the guides listed below should help.</p>
                    <a>Learn more about credit <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
            </div>
            <div className="softCheck-buttons">
                <button className="softCheck-doneBTN">Done</button>
                <button className="softCheck-applyBTN">Apply for loan <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
        </div>

        </>
    )
}

export default SoftCheck;