import "./HomeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeCard(props) {
  const questions = props.promoText.split("?").join(" ?, ").split(", ");
  return (
    <div className="HomeCard-container">
      <div className="homeCard-icons">
        <FontAwesomeIcon icon={props.icon} style={{ height: "40px" }} />
      </div>

      <div className="homeCard-text">
        <h2>{props.homeCardHeader}</h2>
        <p>{props.homeCardText}</p>
      </div>

      <div className="homeCard-promo">
        <h4>
          <FontAwesomeIcon
            icon={props.promoIcon}
            style={{ marginRight: "7.22px" }}
          />
          {props.promoHeader}
        </h4>
        <p>
          {" "}
          {questions.map((question, index) => (
            <p key={index}>{question.trim()}</p>
          ))}
        </p>
      </div>
      <button className="homeCard-button">{props.buttonText}</button>
    </div>
  );
}

export default HomeCard;
