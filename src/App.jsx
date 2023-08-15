import "./App.css";
import NewLoan from "./components/StartLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import { Routes, Route } from "react-router-dom";
import SoftCombined from "./components/SoftCheck/SoftCombined";
import Homepage from "./components/StartLoan/Homepage";
import InfoCombined from './components/InformationCheck/InfoCombined';
import ModelDecision from './components/StartLoan/ModelDecision';
import LoginForm from "./components/Login/LoginForm";
import CurrrentLoans from "./components/StartLoan/CurrentLoans";
import LoanAcceptedDetails from "./components/StartLoan/LoanAcceptedDetails";
import FindOutMore from "./components/FindOutMore/FindOutMore"
import FindOutMoreLowerAmount from "./components/FindOutMore/FindOutMoreLowerAmount";
import Footer from "./components/UIComponents/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <>
               <CombinedBar /><Homepage /> <Footer/>
            </>
          }
        />
        <Route
          path="/CustomerInfo"
          element={
            <>
              <CombinedBar /> <InfoCombined /> <Footer/>
            </>
          }
        />
        <Route
          path="/NewLoan"
          element={
            <>
              <CombinedBar /> <NewLoan /> <Footer/>
            </>
          }
        />
        <Route
          path="/SoftCheck"
          element={
            <>
              <CombinedBar />
              <SoftCombined />
              <Footer/>
            </>
          }
        />
        <Route
          path="/ModelDecision"
          element={
            <>
              <CombinedBar />
              <ModelDecision />
              <Footer/>
            </>
          }
        />
          <Route
          path="/"
          element = {
            <LoginForm/>
          } />
        <Route
          path="/CurrentLoans"
          element={
            <>
              <CombinedBar />
              <CurrrentLoans />
              <Footer/>
            </>
          }
        />
        <Route
          path="/PaymentDetails"
          element={
            <>
              <CombinedBar />
              <LoanAcceptedDetails />
              <Footer/>
            </>
          }
        />
        <Route 
        path="/FindOutMore"
        element={
          <>
          <CombinedBar />
          <FindOutMore />
          <Footer/>
          </>
        } />
        <Route 
        path="/FindOutMoreLowerAmount"
        element={
          <>
          <CombinedBar />
          <FindOutMoreLowerAmount />
          <Footer/>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
