import "./SelectedCustomer.css";

const SelectedCustomer = (props) => {

  return (
    <>
      <div className="sel-customer-info">
        <div className="sel-customer-info-1">
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> First Name</label>
            <input
              value= 'Lionel'
              type="AccountNo"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>

          <div className="sel-customer-personalInfo">
            <label htmlFor="birthDate"> Last Name</label>
            <input
              value='Messi'
              type=""
              placeholder=""
              id="birthDate"
              name="birthDate"
              readOnly
            />
          </div>
          <div className="sel-customer-personalInfo">
            <label htmlFor="loanType"> Loan Type</label>
            <input
              value='Personal Loan' // Change
              type=""
              placeholder=""
              id="loanType"
              name="loanType"
              readOnly
            />
          </div>

          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Loan Amount</label>
            <input
              value='15,000' // Change in the future
              type="AccountNo"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>
        </div>

        <div className="sel-customer-info-1">
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Date Applied</label>
            <input
              value=''
              type="date"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Date Accepted</label>
            <input
              value={props.AccountNo}
              type="date"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Account Number</label>
            <input
              value='1770842504'
              type="AccountNo"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCustomer;
