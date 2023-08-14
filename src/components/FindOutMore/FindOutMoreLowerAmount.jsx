import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './FindOutMoreLowerAmount.css'
import { useNavigate } from "react-router-dom";
import VerticalBar from "../UIComponents/VerticalBar";

const FindOutMoreLowerAmount= () =>{

    const navigate = useNavigate();
    const handleDone = (e) =>{
        e.preventDefault();
        navigate('/home')
    }
    const handleApply = (e) => {
        e.preventDefault();
        navigate('/NewLoan')
    }
    const newLoanAmount = '5000'

    const tip1 = "Electricity bill payment past due"
    const tip1example = "Pay your electricity bill on time for the next six months to improve your credit score"
    const tip2 = "Moved 3 times the past year"
    const tip2example = "To improve your credit score, rent the same apartment/house for the next year"
    const tip3 = "Pay off your existing debts"
    const tip3example = "By paying off your existing debt you can significantly improve your credit score"
    return(
        <>
        <div className="findOutMoreLowerAmount-VerticalContainer">
            <VerticalBar />
        <div className="findOutMoreLowerAmount-container">

            
            <h1 className="sev-findOutMoreLowerAmountHeader">UNSUCCESFUL APPLICATION DETAILS</h1>
            <div className="findOutMoreLowerAmount-mainContent">
            <div className="details-findOutMoreLowerAmount">
                <p>Unfortunately your application has been rejected. Here are some tips to improve your credit score:</p>
                <div className="findOutMoreLowerAmount-tips">
                    <p>{tip1}</p>
                    {tip1 && (<div>

                                  <ul className="tip"><li>{tip1example}</li></ul>
                            </div> )}
                    <p>{tip2}</p>
                    {tip2 && (<div>

                                <ul className="tip"><li>{tip2example}</li></ul>
                        </div> )}                   
                </div>

            </div>
            <div className="findOutMoreLowerAmount-newLoan">
                <p>After careful consideration we are able to offer you a loan of £{newLoanAmount} instead of your original request.</p>
                <button className="findOutMoreLowerAmount-applyLoanBtn" onClick={handleApply}>Apply for new loan <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>

            </div>
            <div className="understandingCredit">
            <FontAwesomeIcon className= 'findOutMoreLowerAmount-userIcon'icon={faUser} />
                <div className="understandingCredit-texts">
                    <h1>Have a question? Ask our advisors</h1>
                    
                    <p>If you have further questions about your loan application, take a look at our FAQ or ask for help from one of our advisors.</p>
                </div>
            </div>
            <div className="findOutMoreLowerAmount-buttons">
                <button className="findOutMoreLowerAmount-doneBTN" onClick={handleDone}>Done</button>
                <button className="findOutMoreLowerAmount-askBTN">Ask for help</button>
            </div>
        </div>
        </div>

        </>
    )
}

export default FindOutMoreLowerAmount;