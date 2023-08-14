import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './FindOutMore.css'
import { useNavigate } from "react-router-dom";
import VerticalBar from "../UIComponents/VerticalBar";

const FindOutMore= () =>{

    const navigate = useNavigate();
    const handleDone = (e) =>{
        e.preventDefault();
        navigate('/home')
    }
    const handleApply = (e) => {
        e.preventDefault();
        navigate('/NewLoan')
    }

    const tip1 = "Electricity bill payment past due"
    const tip2 = "Moved 3 times the past year"
    const tip3 = "Pay off your existing debts"
    return(
        <>
        <div className="findOutMore-VerticalContainer">
            <VerticalBar />
        <div className="findOutMore-container">

            
            <h1 className="sev-findOutMoreHeader">UNSUCCESFUL APPLICATION DETAILS</h1>
            <div className="findOutMore-mainContent">
            <div className="details-findOutMore">
                <p>Unfortunately your application has been rejected. Here are some tips to improve your credit score:</p>
                <div className="findOutMore-tips">{tip1}{tip2}{tip3}</div>
            </div>

            </div>
            <div className="understandingCredit">
            <FontAwesomeIcon className= 'findOutMore-questionMarkIcon'icon={faQuestion} />
                <div className="understandingCredit-texts">
                    <h1>Understanding Credit</h1>
                    
                    <p>Whether you’ve never borrowed before and want to understand the basics, or you’re an existing borrower looking for information and support, the guides listed below should help.</p>
                    <a>Learn more about credit <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
            </div>
            <div className="findOutMore-buttons">
                <button className="findOutMore-doneBTN" onClick={handleDone}>Done</button>
            </div>
        </div>
        </div>

        </>
    )
}

export default FindOutMore;