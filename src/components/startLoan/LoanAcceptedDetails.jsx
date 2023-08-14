import VerticalBar from "../UIComponents/VerticalBar";
import "./LoanAcceptedDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PaymentTable from "./PaymentTable";

const LoanAcceptedDetails = () => {
  const headers = [
    "Month",
    "Date",
    "Payment",
    "Principal",
    "Interest",
    "Balance",
  ];
  const data = [
    ["January", "01-Jan", "$500", "$100", "$25", "$2000"],
    ["February", "15-Feb", "$500", "$110", "$20", "$1890"],
    ["March", "10-Mar", "$500", "$120", "$15", "$1770"],
    ["April", "05-Apr", "$500", "$130", "$10", "$1640"],
    ["May", "20-May", "$500", "$140", "$5", "$1500"],
    ["June", "25-Jun", "$500", "$150", "$0", "$1350"],
    ["July", "05-Jul", "$500", "$160", "$0", "$1190"],
    ["August", "15-Aug", "$500", "$170", "$0", "$1020"],
    ["September", "10-Sep", "$500", "$180", "$0", "$840"],
    ["October", "10-Oct", "$500", "$190", "$0", "$650"],
    ["November", "15-Nov", "$500", "$200", "$0", "$450"],
    ["December", "20-Dec", "$500", "$210", "$0", "$240"],
  ];

  const headers1 = ["Month", "Date"];
  const data1 = [
    ["Annual Interest Rate", ""],
    ["Term of Loan in Years", ""],
    ["First Payment Date", ""],
    ["First Payment Date", ""],
    ["Payment (per period)", ""],
  ];
  const headers2 = ["Month", "Date"];
  const data2 = [
    ["Term of Loan in Years", ""],
    ["Total Payments", ""],
    ["Total Interest", ""],
    ["Interest Savings", ""],
  ];

  return (
    <div className="acceptedDetails-container">
      <VerticalBar />

      <div className="acceptedDetails-remaining-content">
        <div className="loanDetails-container">
          <h1>
            <FontAwesomeIcon
              icon={faCoins}
              style={{ marginRight: "17.22px", fontSize: "40px" }}
            />
            YOUR LOAN DETAILS
          </h1>
          <div className="payment-schedule-container">
            <h2 className="loan-schedule-header">Loan Payment Schedule </h2>
            <div className="loan-schedule-tables-container">
              <div className="small-tables-container">
                {" "}
                <PaymentTable headers={headers1} data={data1} />
                <PaymentTable headers={headers2} data={data2} />
              </div>

              <PaymentTable headers={headers} data={data} />
            </div>
            <h2 className="loan-schedule-header">
              Next payment scheduled for 02/08/2023{" "}
            </h2>
          </div>
          <button className="paymentschedule-back">
            <FontAwesomeIcon icon={faChevronLeft} /> back
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoanAcceptedDetails;
