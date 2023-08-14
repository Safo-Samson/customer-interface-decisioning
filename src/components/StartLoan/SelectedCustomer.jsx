import "./SelectedCustomer.css";

const SelectedCustomer = (props) => {
  return (
    <>
      <div className="sel-customer-info">
        <div className="sel-customer-info-1">
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> First Name</label>
            <input
              value={props.AccountNo}
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
              value={props.birthDate}
              type="date"
              placeholder=""
              id="birthDate"
              name="birthDate"
              readOnly
            />
          </div>
          <div className="sel-customer-personalInfo">
            <label htmlFor="loyaltyDays"> Loan Type</label>
            <input
              value={props.loyaltyDays}
              type="loyaltyDays"
              placeholder=""
              id="loyaltyDays"
              name="loyaltyDays"
              readOnly
            />
          </div>

          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Loan Amount</label>
            <input
              value={props.AccountNo}
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
              value={props.AccountNo}
              type="AccountNo"
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
              type="AccountNo"
              placeholder=""
              id="AccountNo"
              name="AccountNo"
              readOnly
            />
          </div>
          <div className="sel-customer-personalInfo">
            <label htmlFor="AccountNo"> Account Number</label>
            <input
              value={props.AccountNo}
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
