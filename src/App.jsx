import "./App.css";
import CombinedBar from "./components/UIComponents/CombinedBar";
import InfoCombined from "./components/InformationCheck/InfoCombined";
import Homepage from "./components/startLoan/Homepage";
import { Routes, Route } from "react-router-dom";
import NewLoan from './components/StartLoan/NewLoan';
import SoftCombined from './components/SoftCheck/SoftCombined';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<><CombinedBar/> <Homepage /></>} />
      <Route path="/CustomerInfo" element={<><CombinedBar/> <InfoCombined /></>} />
      <Route path="/NewLoan" element={<><CombinedBar/> <NewLoan /></>} />
      <Route path="/SoftCheck" element={<><CombinedBar/><SoftCombined/></>} />
    </Routes>
    </>
  );
}

export default App;
