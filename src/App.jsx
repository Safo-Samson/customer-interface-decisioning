import "./App.css";
import NewLoan from './components/StartLoan/NewLoan'
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";
import Homepage from "./components/HomeLoan/Homepage";
import InformationCheck from './components/InformationCheck/InformationCheck'
import InfoCombined from './components/InformationCheck/InfoCombined'

function App() {
  return (
    <>
      <CombinedBar />
      {/* <NewLoan /> */}
      <Homepage />
      <InfoCombined /> 
    </>
  );
}

export default App;
