import "./App.css";
import CombinedBar from "./components/UIComponents/CombinedBar";
import HomePage from './components/StartLoan/Homepage';
import InfoCombined from './components/InformationCheck/InfoCombined'

function App() {
  return (
    <>
      <CombinedBar />
      {/* <NewLoan /> */}
      <Homepage />
      {/* <InfoCombined />  */}
    </>
  );
}

export default App;
