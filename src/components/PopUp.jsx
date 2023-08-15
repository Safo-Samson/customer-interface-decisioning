import React from "react";
import "./PopUp.css"
 
const Popup = props => {
  return (
    <div className={"popup-box"}>
      <div className={`box ${props.type}`}>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;