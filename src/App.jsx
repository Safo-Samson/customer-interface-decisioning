import "./App.css";
import NewLoan from "./components/HomeLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";

function App() {
  return (
    <>
      <CombinedBar />
      <NewLoan />
      {/* <StartLoan /> */}
    </>
  );
}

export default App;
