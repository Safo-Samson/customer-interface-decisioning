
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import './InformationCheck.css'
import { useState } from "react";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const InformationCheck= () => {
    const navigate = useNavigate();

    const handleClose = (e) =>{
        e.preventDefault();
        navigate('/NewLoan')
    }

	const [loanType, setType] = useState(location.state?.loanType || "undefined");
	const [loanAmountinfo, setAmountInfo] = useState(location.state?.amount || "undefined");
	const [dateApplied, setValue] = useState(location.state?.dateApplied || "undefined");
	const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
	const [creditScore, setScore] = useState(location.state?.creditScore);
    const [birthDate, setBirth] = useState(location.state?.birthDate);
    const[residentialStatus, setResidential] = useState(location.state?.residentialStatus);
    const[employmentStatus, setEmployment] = useState(location.state?.employmentStatus);
    const[dependents, setDependents] = useState(location.state?.dependents || '3');
    const [income, setIncome] = useState(location.state?.income || '200000');
    const[defaults, setDefaults] = useState(location.state?.defaults);
    const[loyaltyDays, setLoyalty] = useState(location.state?.loyaltyDays || '729');
    const[loanTerm, setTerm] = useState(location.state?.loanTerm || '3');
    return(
        <>
            <div className="informationCheck-container">
                <div className="informationCheck-header">
                    <FontAwesomeIcon className='coinsIcon' icon={faCoins}/>
                    <h1 className="sev-infoHeader">MY DETAILS</h1>
                </div>

					<form className="form-container">

						<div className="personalInfo">
                            <div className="personalInfoTxt">
                                CUSTOMER INFORMATION
                            </div>
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
                                    type = "loyaltyDays"
                                    placeholder=""
                                    id="loyaltyDays"
                                    name="loyaltyDays"
                                    readOnly
                                />

                            </div>
                            </div>


						</div>

						<div className="loanInfo">
                            <div className="loanInfoTxt">LOAN INFORMATION</div>
                            <div className="loanFields">
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

							    <div className="loanType">
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
                                <div className="loanAmountinfo">
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

                                <div className="loanTerm">
                                    <label htmlFor="loanTerm">Loan Term</label>
                                    <input
                                        value={loanTerm}
                                        onChange={(e)=> setTerm(e.target.value)}
                                        type="loanTerm"
                                        placeholder="months"
                                        id="loanterm"
                                        name="loanTerm"
                                        readOnly
                                        />
                                </div>
                            </div>
                         </div>    


                        <div className="financialInfo">
                            <div className="financialInfoTxt">FINANCIAL INFORMATION</div>
                        <div className="financialFields">

                        <div className="employmentStatus">
                                <label htmlFor="employmentStatus"> Employment Status</label>
                                <input
                                    value={employmentStatus}
                                    onChange={(e) => setEmployment(e.target.value)}
                                    type = "employmentStatus"
                                    placeholder=""
                                    id="employmentStatus"
                                    name="employmentStatus"
                                    readOnly
                                />
                            </div>
                        <div className="defaults">
                                <label htmlFor="defaults"> Defaults</label>
                                <input
                                    value={defaults}
                                    onChange={(e) => setDefaults(e.target.value)}
                                    type = "defaults"
                                    placeholder=""
                                    id="defaults"
                                    name="defaults"
                                    readOnly
                                />

                        </div>
                        <div className="income">
                                <label htmlFor="income"> Income</label>
                                <input
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                    type = "income"
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
                                    type = "dependents"
                                    placeholder=""
                                    id="dependents"
                                    name="dependents"
                                    readOnly
                                />
                            </div>

                            <div className="residentialStatus">
                                <label htmlFor="residentialStatus"> Residential Status</label>
                                <input
                                    value={residentialStatus}
                                    onChange={(e) => setResidential(e.target.value)}
                                    type = "residentialStatus"
                                    placeholder=""
                                    id="residentialStatus"
                                    name="residentialStatus"
                                    readOnly
                                />
                            </div>

                            

                        </div>
                        <div className="buttons">
						<button className="backBTN" onClick={handleClose}> <FontAwesomeIcon icon={faChevronLeft} />Back</button>
                        <button className="editBTN">Edit</button>
						<button className="applyBTN"  >Apply for loan <FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                        </div>

                    </form>
                
            </div>
        </>
    )
}

export default InformationCheck