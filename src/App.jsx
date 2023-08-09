import "./App.css";
import NewLoan from "./components/HomeLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";
import Homepage from "./components/HomeLoan/Homepage";

function App() {
  return (
    <>
      <CombinedBar />
      {/* <NewLoan /> */}
      <Homepage />
    </>
  );
}

export default App;
