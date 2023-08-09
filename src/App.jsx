import "./App.css";
import NewLoan from './components/StartLoan/NewLoan'
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";
import InformationCheck from './components/InformationCheck/InformationCheck'
import InfoCombined from './components/InformationCheck/InfoCombined'

function App() {
  return (
    <>
      <CombinedBar />
      <InfoCombined /> 
    </>
  );
}

export default App;
