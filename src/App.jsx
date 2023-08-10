import "./App.css";
import NewLoan from "./components/StartLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";
import Homepage from "./components/HomeLoan/Homepage";

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
      </Routes>
    </>
  );
}

export default App;
