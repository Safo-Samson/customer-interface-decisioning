import React, { useState } from "react";
import "./LoginForm.css";
import horseLogo from "../../assets/horseLogo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLock, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [advisorID, setID] = useState("");
	const [password, setPass] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (advisorID.trim() === "" || password.trim() === "") {
			setError("Please fill out all the fields.");
		} else {
			setError("");
			navigate("/home");
		}
	};

	return (
    <>
      <div className="auth-form-container">
        <div className="loginForm-logo-header">
          <h1> LLOYDS BANK </h1>
          <img className="loginForm-logo" src={horseLogo} alt="Logo" />
          <div className="mobile-cookies">
          <u> Mobile</u>
          <u>Cookie Policy</u>
          
          <div className="secure-login">
          <FontAwesomeIcon icon={faLock} /> 
            <b>Youre logging into a secure site</b>
            <u>How can I tell that this site is secure?</u>
          </div>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="left-and-right">
          <div className="left-side-login">
            <div className="welcome-to-banking">
            <h2 className="login-text">Welcome to Internet Banking</h2>
            <p>If you don't already use Internet Banking, it's simple to <a href="">register online.</a></p>
            <div className="input-row">
              <label htmlFor="AdvisorID">User ID:</label>
              <input
                value={advisorID}
                onChange={(e) => setID(e.target.value)}
                type="advisorID"
                placeholder=""
                id="AdvisorID"
                name="AdvisorID"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder=""
                id="password"
                name="password"
                required
              />
              <div className="rememberUser">
              <input type="checkbox" id="remember" name="remember" value="Remember" />
              <label for="remember"> Remember my User ID</label>
              </div>
              <p><b>Warning:</b>Don't tick this box if you're using a public or shared computer </p>
            </div>
            
            </div>
            <div className="forgot-details">
              <a href="">Forgotten your logon details?
              </a>
              <button>Continue </button>
            </div>
            <div className="mobile-app-try">
            {/* <FontAwesomeIcon className='mobile-app-icon' icon={faMobileScreen} /> */}
              <div className="mobile-app-try-txt">
              <h3>Why not try our secure Mobile Banking App?</h3>
              <p>With our app you get access to lots of extra features to make banking even easier. Things like freeze your card, check your PIN and set your own contactless limit. </p>
              <a href="">How to set up the app</a>
              </div>
            </div>
          </div>
          <div className="helpSupport-contact">
          <div className="helpSupport"><h3>Help & Support </h3> <FontAwesomeIcon icon={faAngleDown} /> </div>
          <div className="contact"><h3>Contact Us </h3><FontAwesomeIcon icon={faAngleDown} /></div>

        </div>
        </div>
          <div className="login-form-footer">
            <p><b>Personal Banking</b>    Security    Legal    Privacy   Rates and charges     www.lloydsbankinggroup.com</p>
            <p>Lloyds Bank plc. Registered Office: 25 Gresham Street, London EC2V 7HN.  Registered in England and Wales no. 2065 Lloyds Bank plc is authorised by the Prudential Regulation Authority <br /> and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.</p>
          </div>

        </form>

        </div>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default React.memo(LoginForm);
