import "./App.css";
import CombinedBar from "./components/UIComponents/CombinedBar";
import InfoCombined from "./components/InformationCheck/InfoCombined";
import Homepage from "./components/startLoan/Homepage";
import { Routes, Route } from "react-router-dom";
import NewLoan from './components/StartLoan/NewLoan'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<><CombinedBar/> <Homepage /></>} />
      <Route path="/CustomerInfo" element={<><CombinedBar/> <InfoCombined /></>} />
      <Route path="/NewLoan" element={<><CombinedBar/> <NewLoan /></>} />
    </Routes>
    </>
  );
}

export default App;
