import VerticalBar from "../UIComponents/VerticalBar";
import "./LoanAcceptedDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PaymentTable from "./PaymentTable";
import SelectedCustomer from "./SelectedCustomer";
import { useNavigate } from "react-router-dom";
import jsonData from "../../assets/5843479162_loanSchedule.json";
const LoanAcceptedDetails = () => {
  const headers = [
    "Month",
    "Date",
    "Payment",
    "Principal",
    "Interest",
    "Balance",
  ];
  const { Month, Date, Payment, Principal, Interest, Balance } = jsonData;
  const data = Month.map((month, index) => [
    month,
    Date[index],
    `£${Payment[index]}`,
    `£${Principal[index]}`,
    `£${Interest[index]}`,
    `£${Balance[index]}`,
  ]);
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
    // ["Interest Savings", ""],
  ];

  const nav = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    nav("/ModelDecision", {
      state: {
        decision: 1, // doesnt work as intended
      },
    });
  };

  return (
    <div className="acceptedDetails-container">
      <VerticalBar />

      <div className="acceptedDetails-remaining-content">
        <div className="loanDetails-container">
          <h1>
            <FontAwesomeIcon icon={faCoins} className="header-icon2" />
            YOUR LOAN DETAILS
          </h1>
          <SelectedCustomer />

          <div className="payment-schedule-container">
            <h2 className="loan-schedule-header">Loan Payment Schedule </h2>
            <div className="loan-schedule-tables-container">
              <div className="small-tables-container">
                {" "}
                <PaymentTable headers={headers1} data={data1} />
                <PaymentTable headers={headers2} data={data2} />
              </div>

              <div className="big-table">
                {" "}
                <PaymentTable headers={headers} data={data} />
              </div>
            </div>
            <h2 className="loan-schedule-header">
              Next payment scheduled for 02/08/2023{" "}
            </h2>
          </div>
          <button className="paymentschedule-back" onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoanAcceptedDetails;
