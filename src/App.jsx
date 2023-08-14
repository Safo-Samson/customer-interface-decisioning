import "./App.css";
import NewLoan from "./components/StartLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import { Routes, Route } from "react-router-dom";
import SoftCombined from "./components/SoftCheck/SoftCombined";
import Homepage from "./components/startLoan/Homepage";
import InfoCombined from './components/InformationCheck/InfoCombined';
import ModelDecision from './components/StartLoan/ModelDecision';
import CurrrentLoans from "./components/startLoan/CurrentLoans";
import LoanAcceptedDetails from "./components/startLoan/LoanAcceptedDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CombinedBar /> <Homepage />
            </>
          }
        />
        <Route
          path="/CustomerInfo"
          element={
            <>
              <CombinedBar /> <InfoCombined />
            </>
          }
        />
        <Route
          path="/NewLoan"
          element={
            <>
              <CombinedBar /> <NewLoan />
            </>
          }
        />
        <Route
          path="/SoftCheck"
          element={
            <>
              <CombinedBar />
              <SoftCombined />
            </>
          }
        />
        <Route
          path="/ModelDecision"
          element={
            <>
              <CombinedBar />
              <ModelDecision />
            </>
          }
        />
        <Route
          path="/CurrentLoans"
          element={
            <>
              <CombinedBar />
              <CurrrentLoans />
            </>
          }
        />
        <Route
          path="/PaymentDetails"
          element={
            <>
              <CombinedBar />
              <LoanAcceptedDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
