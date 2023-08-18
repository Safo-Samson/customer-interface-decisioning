import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Apex from "./Apex";
import './SoftCheck.css'
import { useNavigate } from "react-router-dom";
import insights from '../../assets/insights.json';

const SoftCheck= () =>{
    const navigate = useNavigate();
    const handleDone = (e) =>{
        e.preventDefault();
        navigate('/home')
    }
    const handleApply = (e) => {
        e.preventDefault();
        navigate('/NewLoan')
    }
    const {positive, negative} = insights;
    const negativeTip1 = negative[0];
    const negativeTip2 = negative[1];
    const negativeTip3 = negative[2];


    const positiveTip1 = positive[0];
    const positiveTip2 = positive[1];
    const positiveTip3 = positive[2];






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
                    <div className="softCheck-bad-text">
                
                    <p>{negativeTip1 && <FontAwesomeIcon icon={faExclamation} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/> } {negativeTip1}</p>
                    <p>{negativeTip2 && <FontAwesomeIcon icon={faExclamation} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/> } {negativeTip2}</p>
                    <p>{negativeTip3 && <FontAwesomeIcon icon={faExclamation} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/> } {negativeTip3}</p>

                    </div>
                    </div>

                    <div className="softCheck-good">
                    <FontAwesomeIcon className= 'softCheck-checkMarkIcon'icon={faCheck} />
                    <div className="softCheck-bad-text">
                    <p>{positiveTip1 && <FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>}{positiveTip1}</p>
                    <p>{positiveTip2 && <FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>}{positiveTip2}</p>
                    <p>{positiveTip3 && <FontAwesomeIcon icon={faCheck} style={{background: 'white', width: '10.67px', height:'10.67px',borderRadius: '20px', color: '#481468', padding: '3px', marginRight: '7px'}}/>}{positiveTip3}</p>
                    </div>


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
                <button className="softCheck-doneBTN" onClick={handleDone}>Done</button>
                <button className="softCheck-applyBTN" onClick={handleApply}>Apply for loan <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
        </div>

        </>
    )
}

export default SoftCheck;