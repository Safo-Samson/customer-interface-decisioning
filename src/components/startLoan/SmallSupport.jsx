import "./SmallSupport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons";
function SmallSupport() {
  return (
    <div className="small-support-container">
      <img
        src="src\assets\llyods customer service.png"
        alt="small-support"
        className="small-service-img"
      />

      <div className="small-support-container-text">
        <h5>
          <FontAwesomeIcon
            icon={faSterlingSign}
            style={{
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          />
          CREDIT SCORE CHECK
        </h5>
        <p>
          If you already have a loan with us, we've a range of flexible ways to
          help you. If your needs have changed, we're here to help.
        </p>
      </div>
      <button className="small-support-container-button">
        MANAGE CURRENT LOANS
      </button>
    </div>
  );
}

export default SmallSupport;
