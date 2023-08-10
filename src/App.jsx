import "./App.css";
import NewLoan from "./components/StartLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import ModelDecision from "./components/startLoan/ModelDecision";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CombinedBar /> <ModelDecision />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
