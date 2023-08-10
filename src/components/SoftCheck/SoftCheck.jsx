import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
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
        </div>
        </>
    )
}

export default SoftCheck;