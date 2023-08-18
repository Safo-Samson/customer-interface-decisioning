import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './FindOutMore.css'
import { useNavigate } from "react-router-dom";
import VerticalBar from "../UIComponents/VerticalBar";
import insights from '../../assets/insights.json'

const FindOutMore= () =>{

    const navigate = useNavigate();
    const handleDone = (e) =>{
        e.preventDefault();
        navigate('/ModelDecision')
    }
    const handleApply = (e) => {
        e.preventDefault();
        navigate('/NewLoan')
    }

    const { positive, negative, negative_suggestions} = insights;
    
    



    const tip1 = negative[0]
    const tip1example = negative_suggestions [0]
    const tip2 = negative[1]
    const tip2example = negative_suggestions [1]
    const tip3 = negative[2]
    const tip3example = negative_suggestions [2]
    return(
        <>
        <div className="findOutMore-VerticalContainer">
            <VerticalBar />
        <div className="findOutMore-container">

            
            <h1 className="sev-findOutMoreHeader">UNSUCCESFUL APPLICATION DETAILS</h1>
            <div className="findOutMore-mainContent">
            <div className="details-findOutMore">
                <p>Unfortunately your application has been rejected. Here are some tips to improve your credit score:</p>
                <div className="findOutMore-tips">
                    <p>{tip1}</p>
                    {tip1 && (<div>

                                  <ul className="tip"><li>{tip1example}</li></ul>
                            </div> )}
                    <p>{tip2}</p>
                    {tip2 && (<div>

                                <ul className="tip"><li>{tip2example}</li></ul>
                        </div> )}                   
                    <p>{tip3}</p>
                    {tip3 && (<div>

                              <ul className="tip"><li>{tip3example}</li></ul>
                        </div> )}   
                    </div>
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
                <button className="findOutMore-doneBTN" onClick={handleDone}><FontAwesomeIcon icon={faChevronLeft} /> Back</button>
            </div>
        </div>
        </div>

        </>
    )
}

export default FindOutMore;